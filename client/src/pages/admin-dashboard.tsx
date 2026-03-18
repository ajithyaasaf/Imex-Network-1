import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useLocation } from "wouter";
import { ContactInquiry } from "@shared/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { LogOut, Mail, Phone, MapPin, Building, Calendar, FileText, Eye, Trash2, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logoPath from "@assets/Logo_1755174068526.png";
import { Input } from "@/components/ui/input";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [viewInquiry, setViewInquiry] = useState<ContactInquiry | null>(null);
  const [deleteInquiry, setDeleteInquiry] = useState<ContactInquiry | null>(null);

  useEffect(() => {
    if (!auth || !db) {
      setLocation("/admin/login");
      return;
    }

    const unsubscribeAuth = auth.onAuthStateChanged((user: any) => {
      if (!user) {
        setLocation("/admin/login");
      }
    });

    const q = query(collection(db, "websites", "imex-network", "contactInquiries"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
      })) as ContactInquiry[];

      setInquiries(data);
      setLoading(false);
    });

    return () => {
      unsubscribe();
      unsubscribeAuth();
    };
  }, [setLocation]);

  const handleLogout = async () => {
    try {
      if (!auth) return;

      await signOut(auth);
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
      setLocation("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const updateStatus = async (id: string, status: ContactInquiry["status"]) => {
    try {
      if (!db) {
        throw new Error("Database not initialized");
      }

      await updateDoc(doc(db, "websites", "imex-network", "contactInquiries", id), { status });
      toast({
        title: "Status updated",
        description: `Inquiry marked as ${status}`,
      });
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async () => {
    if (!deleteInquiry || !db) return;

    try {
      await deleteDoc(doc(db, "websites", "imex-network", "contactInquiries", deleteInquiry.id));
      toast({
        title: "Inquiry deleted",
        description: "The inquiry has been successfully deleted",
      });
      setDeleteInquiry(null);
    } catch (error) {
      console.error("Error deleting inquiry:", error);
      toast({
        title: "Error",
        description: "Failed to delete inquiry",
        variant: "destructive",
      });
    }
  };

  const exportToCSV = () => {
    const headers = ["Date", "Name", "Company", "Email", "Phone", "Project Type", "Location", "Description", "Status"];
    const csvData = filteredInquiries.map(inquiry => [
      new Date(inquiry.createdAt).toLocaleDateString(),
      inquiry.name,
      inquiry.company || "",
      inquiry.email,
      inquiry.phone,
      inquiry.projectType,
      inquiry.location,
      inquiry.description.replace(/,/g, ";"),
      inquiry.status
    ]);

    const csvContent = [
      headers.join(","),
      ...csvData.map(row => row.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `inquiries_${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Export successful",
      description: `Exported ${filteredInquiries.length} inquiries to CSV`,
    });
  };

  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesSearch =
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.company?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "all" || inquiry.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "new":
        return "default";
      case "read":
        return "secondary";
      case "contacted":
        return "outline";
      case "closed":
        return "destructive";
      default:
        return "default";
    }
  };

  const stats = {
    total: inquiries.length,
    new: inquiries.filter((i) => i.status === "new").length,
    contacted: inquiries.filter((i) => i.status === "contacted").length,
    closed: inquiries.filter((i) => i.status === "closed").length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logoPath} alt="IMEX Logo" className="h-10" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Contact Inquiries Management</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              data-testid="button-logout"
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Total Inquiries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">New</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{stats.new}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Contacted</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{stats.contacted}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Closed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-600">{stats.closed}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <CardTitle>Contact Inquiries</CardTitle>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Search by name, email, or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-xs"
                  data-testid="input-search"
                />
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]" data-testid="select-status-filter">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="read">Read</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  onClick={exportToCSV}
                  variant="outline"
                  className="gap-2"
                  data-testid="button-export"
                  disabled={filteredInquiries.length === 0}
                >
                  <Download className="w-4 h-4" />
                  Export CSV
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-gray-500">Loading inquiries...</div>
            ) : filteredInquiries.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No inquiries found</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Status</TableHead>
                      <TableHead>Contact Info</TableHead>
                      <TableHead>Project Details</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Update Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredInquiries.map((inquiry) => (
                      <TableRow key={inquiry.id} data-testid={`inquiry-row-${inquiry.id}`}>
                        <TableCell>
                          <Badge variant={getStatusBadgeVariant(inquiry.status)} data-testid={`badge-status-${inquiry.id}`}>
                            {inquiry.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-semibold text-gray-900">{inquiry.name}</div>
                            {inquiry.company && (
                              <div className="text-sm text-gray-600 flex items-center gap-1">
                                <Building className="w-3 h-3" />
                                {inquiry.company}
                              </div>
                            )}
                            <div className="text-sm text-gray-600 flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              <a href={`mailto:${inquiry.email}`} className="hover:text-imex-red">
                                {inquiry.email}
                              </a>
                            </div>
                            <div className="text-sm text-gray-600 flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              <a href={`tel:${inquiry.phone}`} className="hover:text-imex-red">
                                {inquiry.phone}
                              </a>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm">
                              <span className="font-semibold">Type:</span> {inquiry.projectType}
                            </div>
                            <div className="text-sm text-gray-600 flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {inquiry.location}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <div className="text-sm text-gray-600 line-clamp-3 flex items-start gap-1">
                            <FileText className="w-3 h-3 mt-0.5 flex-shrink-0" />
                            <span>{inquiry.description}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(inquiry.createdAt).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Select
                            value={inquiry.status}
                            onValueChange={(value) => updateStatus(inquiry.id, value as ContactInquiry["status"])}
                          >
                            <SelectTrigger className="w-[130px]" data-testid={`select-status-${inquiry.id}`}>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">New</SelectItem>
                              <SelectItem value="read">Read</SelectItem>
                              <SelectItem value="contacted">Contacted</SelectItem>
                              <SelectItem value="closed">Closed</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setViewInquiry(inquiry)}
                              data-testid={`button-view-${inquiry.id}`}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setDeleteInquiry(inquiry)}
                              data-testid={`button-delete-${inquiry.id}`}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      {/* View Inquiry Dialog */}
      <Dialog open={!!viewInquiry} onOpenChange={(open) => !open && setViewInquiry(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Inquiry Details</DialogTitle>
            <DialogDescription>
              Submitted on {viewInquiry && new Date(viewInquiry.createdAt).toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          {viewInquiry && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700">Name</label>
                  <p className="text-gray-900">{viewInquiry.name}</p>
                </div>
                {viewInquiry.company && (
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Company</label>
                    <p className="text-gray-900">{viewInquiry.company}</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700">Email</label>
                  <p className="text-gray-900">
                    <a href={`mailto:${viewInquiry.email}`} className="text-imex-red hover:underline">
                      {viewInquiry.email}
                    </a>
                  </p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700">Phone</label>
                  <p className="text-gray-900">
                    <a href={`tel:${viewInquiry.phone}`} className="text-imex-red hover:underline">
                      {viewInquiry.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700">Project Type</label>
                  <p className="text-gray-900">{viewInquiry.projectType}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700">Location</label>
                  <p className="text-gray-900">{viewInquiry.location}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">Status</label>
                <div className="mt-1">
                  <Badge variant={getStatusBadgeVariant(viewInquiry.status)}>
                    {viewInquiry.status}
                  </Badge>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">Description</label>
                <p className="text-gray-900 mt-1 whitespace-pre-wrap">{viewInquiry.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteInquiry} onOpenChange={(open) => !open && setDeleteInquiry(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Inquiry?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete the inquiry from {deleteInquiry?.name}? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-testid="button-cancel-delete">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700"
              data-testid="button-confirm-delete"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

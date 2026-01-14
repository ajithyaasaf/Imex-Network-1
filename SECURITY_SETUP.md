# Security Setup Guide

## 🔒 Firebase Security Configuration

To secure your admin dashboard, follow these steps carefully:

### 1. **Deploy Firestore Security Rules**

Copy the security rules from `firestore.rules` and apply them in Firebase Console:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click **Firestore Database** → **Rules** tab
4. Replace the existing rules with the content from `firestore.rules`
5. Click **Publish**

These rules ensure:
- ✅ Only authenticated admins can view inquiries
- ✅ Only authenticated admins can update/delete inquiries
- ✅ Public contact form can create new inquiries (but not modify existing ones)
- ✅ All other database access is denied by default

### 2. **Configure Firebase Authentication Security**

In Firebase Console → Authentication:

1. **Email Enumeration Protection**: 
   - Go to Settings → Enable "Email enumeration protection"
   - This prevents attackers from discovering valid email addresses

2. **Password Policy**:
   - Ensure minimum password length is 8+ characters
   - Firebase enforces this by default

3. **Authorized Domains**:
   - Go to Settings → Authorized domains
   - Only add your actual domains (remove localhost before production)
   - Add your Replit deployment domain

### 3. **Admin User Management Best Practices**

1. **Create Admin Users Securely**:
   - Only create admin users through Firebase Console (not through the app)
   - Use strong passwords (12+ characters, mixed case, numbers, symbols)
   - Never share admin credentials

2. **Limit Admin Access**:
   - Only create admin accounts for trusted team members
   - Review and remove unused admin accounts regularly

### 4. **Additional Security Measures**

#### A. Enable Multi-Factor Authentication (MFA)
In Firebase Console:
1. Go to Authentication → Sign-in method
2. Enable "Multi-factor authentication" (recommended)

#### B. Monitor Authentication Activity
1. Go to Authentication → Users
2. Regularly review sign-in activity
3. Check for suspicious login attempts

#### C. Set Up App Check (Recommended for Production)
Protects your app from bots and abuse:
1. Go to Firebase Console → App Check
2. Enable App Check for your web app
3. Configure reCAPTCHA v3 provider

### 5. **Environment Variables Security**

✅ **Already Secured**: Your Firebase credentials are stored as Replit secrets
- Never commit API keys to Git
- Never expose credentials in client-side code
- Use environment variables (prefixed with `VITE_` for client-side access)

### 6. **Production Deployment Checklist**

Before going live:

- [ ] Deploy Firestore security rules from `firestore.rules`
- [ ] Enable email enumeration protection
- [ ] Remove test/development authorized domains
- [ ] Add only production domains to authorized domains
- [ ] Enable App Check
- [ ] Review all admin user accounts
- [ ] Test admin login with strong password
- [ ] Verify unauthorized users cannot access `/admin`

### 7. **Monitoring & Alerts**

Set up monitoring to detect security issues:

1. **Firebase Console → Usage and billing**
   - Set up budget alerts for unusual activity
   
2. **Cloud Logging** (if using Google Cloud)
   - Monitor authentication failures
   - Alert on multiple failed login attempts

### 8. **Regular Security Maintenance**

- **Weekly**: Review new admin signups
- **Monthly**: Audit active admin accounts
- **Quarterly**: Review and update security rules
- **When team changes**: Remove access for departed team members

## 🚨 Security Incident Response

If you suspect a security breach:

1. **Immediately**:
   - Go to Firebase Console → Authentication
   - Delete compromised user accounts
   - Reset passwords for all admin accounts

2. **Review**:
   - Check Firestore for unauthorized data changes
   - Review authentication logs for suspicious activity

3. **Update**:
   - Change all admin passwords
   - Update security rules if needed
   - Consider enabling MFA if not already enabled

## ✅ Current Security Status

Your app currently has:
- ✅ Firebase Authentication with email/password
- ✅ Protected admin routes (client-side)
- ✅ Environment variables for credentials
- ⚠️ **ACTION REQUIRED**: Deploy Firestore security rules
- ⚠️ **RECOMMENDED**: Enable App Check for production

## Need Help?

For security questions or incidents, consult:
- [Firebase Security Documentation](https://firebase.google.com/docs/rules)
- [Firebase Authentication Best Practices](https://firebase.google.com/docs/auth/web/manage-users)

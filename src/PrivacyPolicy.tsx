import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ padding: '3rem', lineHeight: '2.2' }}>
      <h1>Privacy Policy for DoggyMail - Fast & Secure Mail</h1>

      <p>
        At DoggyMail - Fast & Secure Mail, accessible through our mobile application, one of our main priorities is the privacy of our users. This Privacy Policy document contains types of information that is collected and recorded by our application and how we use it.
      </p>

      <p>
        If you have more than one account, you can sign in to multiple accounts on webmail simultaneously. With this feature, you can switch between accounts without needing to sign out and log back in.
      </p>
      <p>
        DoggyMail - Fast & Secure Mail allows you to identify incoming calls and provides immediate access to your calendar and emails during and after the call, making it easy to create calendar events and send emails on the spot.
      </p>

      <h2>Email App Features</h2>
      <ul>
        <li>After-call menu and during-call access to calendar and emails</li>
        <li>One inbox for multiple email accounts</li>
        <li>View all your emails in one unified inbox</li>
        <li>Single login for managing multiple accounts</li>
        <li>All-in-one email app that optimizes memory usage</li>
        <li>One-click access to all your apps</li>
      </ul>

      <h2>Why Choose DoggyMail - Fast & Secure Mail?</h2>
      <ul>
        <li>Multi-Account Support: Easily manage all your email accounts in one place, allowing you to switch between them effortlessly within a single app.</li>
        <li>Enhanced Productivity: Handle all your email communications from a central hub, reducing the time and effort required to stay organized.</li>
        <li>Streamlined Workflow: Say goodbye to the hassle of repeated log-ins, enabling a smoother email management experience.</li>
        <li>Multi-Language Support: Choose your preferred language for a user-friendly experience, with support for multiple languages to cater to a global audience.</li>
      </ul>

      <h2>Access Multiple Email Accounts Effortlessly</h2>
      <p>
        Today, most people have several email accounts—be it for personal, professional, or other purposes. Switching between different inboxes can be time-consuming and may result in missed messages or cluttered spam folders. 
        DoggyMail - Fast & Secure Mail provides a solution to unify all your email addresses, whether you have two or ten, into a single app where you can check everything from one place—ensuring you never miss an important email or calendar invite.
      </p>

      <h2>Disclaimer</h2>
      <p>
        DoggyMail - Fast & Secure Mail is an independent app and is not affiliated with Google or any other third-party service.
      </p>
      <p>
        We are not connected with any of the websites listed in this app. All content is retrieved from third-party sources, and we do not have access to your personal data.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or experience any issues while using the app, feel free to reach out to us at <a href="mailto:efrein.faifax@gmail.com">efrein.faifax@gmail.com</a>.
      </p>

      <h2>Scopes Used</h2>
      <p>
        The following Google scopes are used when asking users to sign in. These scopes are needed to ensure all functionalities provided by the app work correctly:
      </p>
      <ul>
        <li>https://mail.google.com/</li>
        <li>https://www.googleapis.com/auth/script.projects</li>
        <li>https://www.googleapis.com/auth/script.deployments</li>
        <li>https://www.googleapis.com/auth/script.scriptapp</li>
        <li>https://www.googleapis.com/auth/script.external_request</li>
        <li>https://www.googleapis.com/auth/script.processes</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;

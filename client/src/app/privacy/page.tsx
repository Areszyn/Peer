"use client";
import React from "react";
import NavBar from "@/components/Layout/NavBar";

export default function PrivacyPage() {
  return (
    <main>
      <NavBar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 2026</p>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
            <p>
              This Privacy Policy describes how Peer to Peer Video Communication ("we", "our", or "us") 
              collects, uses, and shares your personal information when you use our video calling service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-2">Account Information</h3>
            <p className="mb-3">
              When you create an account, we collect:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Your name</li>
              <li>Email address</li>
              <li>Password (encrypted)</li>
              <li>Account creation date</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2 mt-4">Usage Information</h3>
            <p className="mb-3">
              When you use our service, we automatically collect:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Call session information (call ID, timestamps)</li>
              <li>Device and browser information</li>
              <li>IP address</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
            <p className="mb-3">We use the collected information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and maintain our video calling service</li>
              <li>Authenticate your identity and secure your account</li>
              <li>Improve our service and user experience</li>
              <li>Track call history for your convenience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">WebRTC and Peer-to-Peer Connections</h2>
            <p>
              Our service uses WebRTC technology for video and audio streaming. This means that once 
              a connection is established, video and audio data flows directly between participants 
              (peer-to-peer) and does not pass through our servers. Our signaling server is only used 
              to facilitate the initial connection setup.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Storage and Security</h2>
            <p className="mb-3">
              We implement appropriate technical and organizational measures to protect your personal 
              information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Passwords are encrypted using industry-standard bcrypt hashing</li>
              <li>Authentication tokens use JWT (JSON Web Tokens)</li>
              <li>Data is stored securely in PostgreSQL databases</li>
              <li>HTTPS/WSS encryption for all data transmission</li>
              <li>Regular security updates and monitoring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Retention</h2>
            <p>
              We retain your account information and call history for as long as your account is active. 
              You may request deletion of your account and associated data by contacting our support team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Sharing of Information</h2>
            <p className="mb-3">
              We do not sell or rent your personal information to third parties. We may share your 
              information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Cookies and Tracking</h2>
            <p>
              We use cookies for authentication purposes (storing JWT tokens). These are essential 
              for the functioning of our service. We do not use third-party tracking or advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Object to processing of your data</li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Children's Privacy</h2>
            <p>
              Our service is not intended for users under the age of 13. We do not knowingly collect 
              personal information from children under 13. If you believe we have collected such 
              information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please 
              contact our support team.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

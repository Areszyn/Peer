"use client";
import React from "react";
import NavBar from "@/components/Layout/NavBar";

export default function AboutPage() {
  return (
    <main>
      <NavBar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">About Peer to Peer Video Communication</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is this?</h2>
          <p className="text-lg mb-4">
            A real-time peer-to-peer video calling application built using WebRTC technology. 
            This platform enables seamless video communication with multiple participants 
            simultaneously, featuring built-in real-time messaging capabilities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>Multi-User Video Calling:</strong> Connect with multiple participants in real-time</li>
            <li><strong>Real-Time Messaging:</strong> Chat during calls without interrupting the video stream</li>
            <li><strong>Secure Authentication:</strong> User accounts protected with JWT tokens</li>
            <li><strong>Easy Room Access:</strong> Join calls with simple 10-character room IDs</li>
            <li><strong>Media Controls:</strong> Toggle audio and video on/off during calls</li>
            <li><strong>Participant Management:</strong> See who's in the call at any time</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Next.js 14</li>
                <li>React 18</li>
                <li>Redux Toolkit</li>
                <li>WebRTC</li>
                <li>Socket.io Client</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Node.js & Express</li>
                <li>TypeScript</li>
                <li>Socket.io Server</li>
                <li>PostgreSQL</li>
                <li>Prisma ORM</li>
                <li>JWT Authentication</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-3 text-lg">
            <li>
              <strong>Signaling Server:</strong> Uses Socket.io for initial connection setup and 
              in-call messaging coordination
            </li>
            <li>
              <strong>WebRTC Connection:</strong> Establishes direct peer-to-peer connections for 
              audio and video streaming
            </li>
            <li>
              <strong>Data Persistence:</strong> All user accounts and call records are securely 
              stored in PostgreSQL
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Goals</h2>
          <p className="text-lg mb-4">
            This project serves as an exploration of WebRTC technology and real-time communication 
            protocols. While experimental in nature, it provides a fully functional environment 
            for multi-user video conferencing with modern web technologies.
          </p>
          <p className="text-lg">
            The application demonstrates best practices in full-stack development, including 
            secure authentication, real-time bidirectional communication, and responsive 
            user interface design.
          </p>
        </section>
      </div>
    </main>
  );
}

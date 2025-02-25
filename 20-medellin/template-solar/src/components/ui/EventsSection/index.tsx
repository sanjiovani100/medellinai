"use client";

import { useState } from "react";
import { EventCard, EventCardProps } from "./EventCard";
import { Button } from "@/components/Button";

// Mock data for events
const mockEvents: EventCardProps[] = [
  {
    id: "1",
    title: "AI Ethics Workshop",
    description: "Join us for a comprehensive workshop on ethical considerations in AI development and deployment. Learn about bias, fairness, and transparency.",
    date: "March 15, 2025",
    location: "Tech Hub Medellín",
    imageUrl: "https://images.unsplash.com/photo-1581092921461-7031e4f48eda?q=80&w=2070&auto=format&fit=crop",
    status: "upcoming",
    capacity: 50,
    attendees: 32,
  },
  {
    id: "2",
    title: "Machine Learning Fundamentals",
    description: "A beginner-friendly introduction to machine learning concepts, algorithms, and practical applications in today's world.",
    date: "March 10, 2025",
    location: "Universidad de Antioquia",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
    status: "today",
    capacity: 100,
    attendees: 78,
  },
  {
    id: "3",
    title: "AI in Healthcare Symposium",
    description: "Explore how artificial intelligence is transforming healthcare with leading experts from around the world.",
    date: "April 5, 2025",
    location: "Hospital Universitario San Vicente Fundación",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    status: "upcoming",
    capacity: 75,
    attendees: 45,
  },
];

interface EventsSectionProps {
  className?: string;
}

export function EventsSection({ className = "" }: EventsSectionProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section 
      className={`min-h-screen py-20 px-4 bg-background ${className}`}
      aria-labelledby="events-heading"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <h2
            id="events-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
          >
            Featured Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover the latest AI events happening in Medellín. Connect with experts, learn new skills, and be part of the growing AI community.
          </p>
        </div>

        {isLoading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col h-full rounded-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-muted" />
                <div className="flex-1 p-6 space-y-4">
                  <div className="h-6 bg-muted rounded w-3/4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-1/2" />
                    <div className="h-4 bg-muted rounded w-1/3" />
                  </div>
                  <div className="h-4 bg-muted rounded w-full" />
                  <div className="h-4 bg-muted rounded w-full" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Event cards grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {mockEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-12">
          <Button
            variant="primary"
            aria-label="View all events"
            asChild
          >
            <a href="/events">View All Events</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
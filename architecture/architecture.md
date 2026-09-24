# Vacation Rental Marketplace — High-Level Architecture

```text
                         ┌─────────────────────────────┐
                         │          USERS              │
                         │ Guests / Hosts / Admins     │
                         └──────────────┬──────────────┘
                                        │
                                        ▼
                         ┌─────────────────────────────┐
                         │       WEB / MOBILE UI       │
                         │ React / Next.js Application  │
                         └──────────────┬──────────────┘
                                        │
                                        ▼
                         ┌─────────────────────────────┐
                         │        CDN / WAF             │
                         │ Static Assets + Security     │
                         └──────────────┬──────────────┘
                                        │
                                        ▼
                         ┌─────────────────────────────┐
                         │       API GATEWAY            │
                         │ Authentication / Routing     │
                         └──────────────┬──────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             │                          │                          │
             ▼                          ▼                          ▼
   ┌─────────────────┐        ┌─────────────────┐        ┌─────────────────┐
   │ Listing Service │        │ Booking Service │        │ User Service    │
   │ Properties      │        │ Reservations    │        │ Profiles        │
   │ Availability    │        │ Availability    │        │ Authentication  │
   └────────┬────────┘        └────────┬────────┘        └────────┬────────┘
            │                          │                          │
            └──────────────────────────┼──────────────────────────┘
                                       │
              ┌────────────────────────┼────────────────────────┐
              │                        │                        │
              ▼                        ▼                        ▼
   ┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
   │ Search Service  │       │ Payment Service │       │ Notification    │
   │ Search / Filter │       │ Payments        │       │ Service         │
   │ Ranking         │       │ Refunds         │       │ Email / SMS     │
   └────────┬────────┘       └────────┬────────┘       └────────┬────────┘
            │                         │                         │
            ▼                         ▼                         ▼
   ┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
   │ Search Index    │       │ Payment Gateway │       │ Message Queue   │
   │ Elasticsearch / │       │ External        │       │ Event Processing│
   │ OpenSearch      │       │ Provider        │       │                 │
   └─────────────────┘       └─────────────────┘       └─────────────────┘


                         ┌─────────────────────────────┐
                         │       DATA LAYER            │
                         └──────────────┬──────────────┘
                                        │
                  ┌─────────────────────┼─────────────────────┐
                  │                     │                     │
                  ▼                     ▼                     ▼
        ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
        │ Relational DB  │   │ Object Storage  │   │ Cache           │
        │ PostgreSQL     │   │ Property Images │   │ Redis           │
        │ Users/Bookings │   │ Documents       │   │ Sessions        │
        └─────────────────┘   └─────────────────┘   └─────────────────┘


                         ┌─────────────────────────────┐
                         │    OBSERVABILITY            │
                         │ Logs / Metrics / Tracing    │
                         │ Monitoring / Alerting       │
                         └─────────────────────────────┘
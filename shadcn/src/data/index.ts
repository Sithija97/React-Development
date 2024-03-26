import { ISettings } from "@/components/pages/settings";
import { IPayment } from "@/components/pages/orders";
import { IUser } from "@/components/pages/users";
import { CardProps } from "@/components/ui/card";
import { ISalesProps } from "@/components/ui/salescard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

export const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    description: "+180.1% from last month",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "+12,234",
    description: "+19% from last month",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "+573",
    description: "+201 since last hour",
    icon: Activity,
  },
];

export const data: { name: string; total: number }[] = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export const uesrSalesData: ISalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "Nayana Davis",
    email: "nayana.davis@email.com",
    saleAmount: "+$68.00",
  },
];

export const usersData: IUser[] = [
  {
    name: "John Doe",
    email: "john@example.com",
    lastOrder: "2023-01-01",
    method: "Credit Card",
  },
  {
    name: "Alice Smith",
    email: "alice@example.com",
    lastOrder: "2023-02-15",
    method: "PayPal",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    lastOrder: "2023-03-20",
    method: "Stripe",
  },
  {
    name: "Emma Brown",
    email: "emma@example.com",
    lastOrder: "2023-04-10",
    method: "Venmo",
  },
  {
    name: "Michael Davis",
    email: "michael@example.com",
    lastOrder: "2023-05-05",
    method: "Cash",
  },
  {
    name: "Sophia Wilson",
    email: "sophia@example.com",
    lastOrder: "2023-06-18",
    method: "Bank Transfer",
  },
  {
    name: "Liam Garcia",
    email: "liam@example.com",
    lastOrder: "2023-07-22",
    method: "Payoneer",
  },
  {
    name: "Olivia Martinez",
    email: "olivia@example.com",
    lastOrder: "2023-08-30",
    method: "Apple Pay",
  },
  {
    name: "Noah Rodriguez",
    email: "noah@example.com",
    lastOrder: "2023-09-12",
    method: "Google Pay",
  },
  {
    name: "Ava Lopez",
    email: "ava@example.com",
    lastOrder: "2023-10-25",
    method: "Cryptocurrency",
  },
  {
    name: "Elijah Hernandez",
    email: "elijah@example.com",
    lastOrder: "2023-11-05",
    method: "Alipay",
  },
  {
    name: "Mia Gonzalez",
    email: "mia@example.com",
    lastOrder: "2023-12-08",
    method: "WeChat Pay",
  },
  {
    name: "James Perez",
    email: "james@example.com",
    lastOrder: "2024-01-18",
    method: "Square Cash",
  },
  {
    name: "Charlotte Carter",
    email: "charlotte@example.com",
    lastOrder: "2024-02-22",
    method: "Zelle",
  },
  {
    name: "Benjamin Taylor",
    email: "benjamin@example.com",
    lastOrder: "2024-03-30",
    method: "Stripe",
  },
];

export const ordersData: IPayment[] = [
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2023-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD002",
    status: "Processing",
    lastOrder: "2023-02-20",
    method: "PayPal",
  },
  {
    order: "ORD003",
    status: "Completed",
    lastOrder: "2023-03-10",
    method: "Stripe",
  },
  {
    order: "ORD004",
    status: "Pending",
    lastOrder: "2023-04-05",
    method: "Venmo",
  },
  {
    order: "ORD005",
    status: "Completed",
    lastOrder: "2023-05-12",
    method: "Bank Transfer",
  },
  {
    order: "ORD006",
    status: "Processing",
    lastOrder: "2023-06-18",
    method: "Apple Pay",
  },
  {
    order: "ORD007",
    status: "Completed",
    lastOrder: "2023-07-22",
    method: "Google Pay",
  },
  {
    order: "ORD008",
    status: "Pending",
    lastOrder: "2023-08-30",
    method: "Cryptocurrency",
  },
  {
    order: "ORD009",
    status: "Processing",
    lastOrder: "2023-09-05",
    method: "Alipay",
  },
  {
    order: "ORD010",
    status: "Completed",
    lastOrder: "2023-10-18",
    method: "WeChat Pay",
  },
  {
    order: "ORD011",
    status: "Pending",
    lastOrder: "2023-11-25",
    method: "Square Cash",
  },
  {
    order: "ORD012",
    status: "Completed",
    lastOrder: "2023-12-08",
    method: "Zelle",
  },
  {
    order: "ORD013",
    status: "Processing",
    lastOrder: "2024-01-15",
    method: "Stripe",
  },
  {
    order: "ORD014",
    status: "Completed",
    lastOrder: "2024-02-20",
    method: "PayPal",
  },
  {
    order: "ORD015",
    status: "Pending",
    lastOrder: "2024-03-30",
    method: "Credit Card",
  },
];

export const settingsData: ISettings[] = [
  {
    category: "Account",
    value: true,
  },
  {
    category: "Notifications",
    value: false,
  },
  {
    category: "Language",
    value: "English",
  },
  {
    category: "Theme",
    value: "Dark",
  },
];

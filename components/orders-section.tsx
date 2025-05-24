"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  ArrowUpDown,
  Clock,
  CheckCircle,
  Truck,
  XCircle,
  AlertCircle,
} from "lucide-react";
import { useState, useMemo } from "react";

interface Order {
  id: string;
  customerName: string;
  pizzaType: string;
  quantity: number;
  orderDate: string;
  status:
    | "Pending"
    | "Preparing"
    | "Out for Delivery"
    | "Delivered"
    | "Cancelled";
}

const mockOrders: Order[] = [
  {
    id: "PZA001",
    customerName: "Vishesh Yadav",
    pizzaType: "Matrix Margherita",
    quantity: 2,
    orderDate: "2024-01-15 14:30",
    status: "Delivered",
  },
  {
    id: "PZA002",
    customerName: "Aaditya Saxena",
    pizzaType: "Cyber Pepperoni",
    quantity: 1,
    orderDate: "2024-01-15 15:45",
    status: "Out for Delivery",
  },
  {
    id: "PZA003",
    customerName: "Vlad Lenin",
    pizzaType: "Red Pill Supreme",
    quantity: 3,
    orderDate: "2024-01-15 16:20",
    status: "Preparing",
  },
  {
    id: "PZA004",
    customerName: "Mao Zeodang",
    pizzaType: "Virus Veggie",
    quantity: 1,
    orderDate: "2024-01-15 17:10",
    status: "Cancelled",
  },
  {
    id: "PZA005",
    customerName: "Socrates",
    pizzaType: "Prophecy Pepperoni",
    quantity: 2,
    orderDate: "2024-01-15 18:00",
    status: "Pending",
  },
  {
    id: "PZA006",
    customerName: "Vinay Jangru",
    pizzaType: "Betrayal BBQ",
    quantity: 1,
    orderDate: "2024-01-15 18:30",
    status: "Preparing",
  },
  {
    id: "PZA007",
    customerName: "Donald Trump",
    pizzaType: "Operator Original",
    quantity: 4,
    orderDate: "2024-01-15 19:15",
    status: "Delivered",
  },
  {
    id: "PZA008",
    customerName: "Joe Biden",
    pizzaType: "Zion Special",
    quantity: 2,
    orderDate: "2024-01-15 20:00",
    status: "Out for Delivery",
  },
];

const statusConfig = {
  Pending: {
    icon: Clock,
    color: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-500/20",
    text: "text-yellow-400",
  },
  Preparing: {
    icon: AlertCircle,
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/20",
    text: "text-blue-400",
  },
  "Out for Delivery": {
    icon: Truck,
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/20",
    text: "text-purple-400",
  },
  Delivered: {
    icon: CheckCircle,
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-500/20",
    text: "text-green-400",
  },
  Cancelled: {
    icon: XCircle,
    color: "from-red-500 to-pink-500",
    bg: "bg-red-500/20",
    text: "text-red-400",
  },
};

export function OrdersSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"id" | "date" | "customer">("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredAndSortedOrders = useMemo(() => {
    const filtered = mockOrders.filter((order) => {
      const matchesSearch =
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.pizzaType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || order.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    filtered.sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case "id":
          comparison = a.id.localeCompare(b.id);
          break;
        case "date":
          comparison =
            new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime();
          break;
        case "customer":
          comparison = a.customerName.localeCompare(b.customerName);
          break;
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [searchTerm, statusFilter, sortBy, sortOrder]);

  const toggleSort = (field: "id" | "date" | "customer") => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold neon-text bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Quantum Pizza Orders
        </h1>
        <p className="text-gray-400">
          Real-time order management in the digital realm
        </p>
      </div>

      {/* Controls */}
      <Card className="glass-card neon-border p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search orders, customers, or pizza types..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400"
              />
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48 bg-white/5 border-white/20 text-white">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-white/20">
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Preparing">Preparing</SelectItem>
                <SelectItem value="Out for Delivery">
                  Out for Delivery
                </SelectItem>
                <SelectItem value="Delivered">Delivered</SelectItem>
                <SelectItem value="Cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">
              {filteredAndSortedOrders.length} orders
            </span>
          </div>
        </div>
      </Card>

      {/* Orders table */}
      <Card className="glass-card neon-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSort("id")}
                    className="text-gray-300 hover:text-white font-semibold"
                  >
                    Order ID
                    <ArrowUpDown className="w-4 h-4 ml-1" />
                  </Button>
                </th>
                <th className="text-left p-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSort("customer")}
                    className="text-gray-300 hover:text-white font-semibold"
                  >
                    Customer
                    <ArrowUpDown className="w-4 h-4 ml-1" />
                  </Button>
                </th>
                <th className="text-left p-4 text-gray-300 font-semibold">
                  Pizza Type
                </th>
                <th className="text-left p-4 text-gray-300 font-semibold">
                  Quantity
                </th>
                <th className="text-left p-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSort("date")}
                    className="text-gray-300 hover:text-white font-semibold"
                  >
                    Order Date
                    <ArrowUpDown className="w-4 h-4 ml-1" />
                  </Button>
                </th>
                <th className="text-left p-4 text-gray-300 font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedOrders.map((order, index) => {
                const config = statusConfig[order.status];
                const StatusIcon = config.icon;

                return (
                  <tr
                    key={order.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <td className="p-4">
                      <div className="font-mono text-cyan-400 font-semibold">
                        {order.id}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                          {order.customerName.charAt(0)}
                        </div>
                        <span className="text-white font-medium">
                          {order.customerName}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-300">{order.pizzaType}</span>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant="secondary"
                        className="bg-white/10 text-white border-white/20"
                      >
                        {order.quantity}x
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="text-gray-400 text-sm">
                        {new Date(order.orderDate).toLocaleDateString()}
                        <br />
                        <span className="text-xs text-gray-500">
                          {new Date(order.orderDate).toLocaleTimeString()}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge
                        className={`${config.bg} ${config.text} border-0 font-semibold`}
                      >
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {order.status}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredAndSortedOrders.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-400 text-lg">No orders found</p>
            <p className="text-gray-500 text-sm">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}

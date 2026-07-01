import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";

import Login from "@/auth/Login";
import ProtectedRoute from "./ProtectedRoutes";
import { Dashboard } from "@/features/dashboard";
import InspectionListPage from "@/features/inspections/pages/InspectionListPage";
import CreateInspectionPage from "@/features/inspections/pages/CreateInspectionPage";
import EditInspectionPage from "@/features/inspections/pages/EditInspectionPage";
import InspectionDetailsPage from "@/features/inspections/pages/InspectionDetailsPage";
import FactoryListPage from "@/features/factories/pages/FactoryListPage";
import FactoryDetailsPage from "@/features/factories/pages/FactoryDetailsPage";
import CreateFactoryPage from "@/features/factories/pages/CreateFactoryPage";
import EditFactoryPage from "@/features/factories/pages/EditFactoryPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />

            <Route path="/inspections" element={<InspectionListPage />} />
            <Route path="/inspections/create" element={<CreateInspectionPage />} />
            <Route path="/inspections/:id" element={<InspectionDetailsPage />} />
            <Route path="/inspections/:id/edit" element={<EditInspectionPage />} />

            <Route path="/factories" element={<FactoryListPage />} />
            <Route path="/factories/create" element={<CreateFactoryPage />} />
            <Route path="/factories/:id" element={<FactoryDetailsPage />} />
            <Route path="/factories/:id/edit" element={<EditFactoryPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

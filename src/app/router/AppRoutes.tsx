import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";

import Login from "@/auth/Login";
import ProtectedRoute from "./ProtectedRoutes";
import { Dashboard } from "@/features/dashboard";
import InspectionListPage from "@/features/inspections/pages/InspectionListPage";
import CreateInspectionPage from "@/features/inspections/pages/CreateInspectionPage";
import EditInspectionPage from "@/features/inspections/pages/EditInspectionPage";
import InspectionDetailsPage from "@/features/inspections/pages/InspectionDetailsPage";
import {
  FactoryListPage,
  FactoryDetailsPage,
  CreateFactoryPage,
  EditFactoryPage,
} from "@/features/factories/pages";
import {
  InspectorListPage,
  CreateInspectorPage,
  InspectorDetailsPage,
  EditInspectorPage,
} from "@/features/inspectors";

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

            <Route path="/inspectors" element={<InspectorListPage />} />
            <Route path="/inspectors/create" element={<CreateInspectorPage />} />
            <Route path="/inspectors/:id" element={<InspectorDetailsPage />} />
            <Route path="/inspectors/:id/edit" element={<EditInspectorPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

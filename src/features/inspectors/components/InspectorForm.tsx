import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Col, Form, Input, InputNumber, Row, Select } from "antd";
import { Controller, useForm } from "react-hook-form";

import { type InspectorFormValues, inspectorSchema } from "../validation/inspector.schema";

interface Props {
  initialValues?: Partial<InspectorFormValues>;
  loading?: boolean;
  onSubmit: (data: InspectorFormValues) => void | Promise<void>;
}

const factoryOptions = [
  "Hyderabad Apparel Ltd",
  "Tiruppur Knitwear",
  "Bangalore Fashion House",
  "Chennai Garments",
  "Mumbai Textile Mills",
  "Delhi Fashion Works",
  "Jaipur Cotton Industries",
  "Ludhiana Wool Mills",
  "Surat Apparel Exporters",
  "Pune Clothing Co.",
].map((factory) => ({
  label: factory,
  value: factory,
}));

const specializationOptions = [
  "Pre-Production",
  "Inline Inspection",
  "Final Inspection",
  "Packing Audit",
  "Fabric Inspection",
].map((item) => ({
  label: item,
  value: item,
}));

const statusOptions = [
  {
    label: "Active",
    value: "Active",
  },
  {
    label: "Inactive",
    value: "Inactive",
  },
];

export default function InspectorForm({ initialValues, loading = false, onSubmit }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InspectorFormValues>({
    resolver: zodResolver(inspectorSchema),
    defaultValues: {
      employeeId: "",
      name: "",
      email: "",
      phone: "",
      factory: "",
      specialization: "",
      experience: 0,
      status: "Active",
      ...initialValues,
    },
  });

  return (
    <Card>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Employee ID"
              validateStatus={errors.employeeId ? "error" : ""}
              help={errors.employeeId?.message}
            >
              <Controller
                name="employeeId"
                control={control}
                render={({ field }) => <Input placeholder="EMP-001" {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Inspector Name"
              validateStatus={errors.name ? "error" : ""}
              help={errors.name?.message}
            >
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Email"
              validateStatus={errors.email ? "error" : ""}
              help={errors.email?.message}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Phone"
              validateStatus={errors.phone ? "error" : ""}
              help={errors.phone?.message}
            >
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Factory"
              validateStatus={errors.factory ? "error" : ""}
              help={errors.factory?.message}
            >
              <Controller
                name="factory"
                control={control}
                render={({ field }) => <Select {...field} options={factoryOptions} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Specialization"
              validateStatus={errors.specialization ? "error" : ""}
              help={errors.specialization?.message}
            >
              <Controller
                name="specialization"
                control={control}
                render={({ field }) => <Select {...field} options={specializationOptions} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Experience (Years)"
              validateStatus={errors.experience ? "error" : ""}
              help={errors.experience?.message}
            >
              <Controller
                name="experience"
                control={control}
                render={({ field }) => (
                  <InputNumber
                    {...field}
                    min={0}
                    max={50}
                    style={{
                      width: "100%",
                    }}
                  />
                )}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Status"
              validateStatus={errors.status ? "error" : ""}
              help={errors.status?.message}
            >
              <Controller
                name="status"
                control={control}
                render={({ field }) => <Select {...field} options={statusOptions} />}
              />
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" htmlType="submit" loading={loading}>
          Save Inspector
        </Button>
      </Form>
    </Card>
  );
}

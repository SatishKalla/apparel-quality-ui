import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Col, Form, Input, Row, Select } from "antd";
import { Controller, useForm } from "react-hook-form";

import { type FactoryFormValues, factorySchema } from "../validation/factory.schema";
import { AppButton } from "@/components/ui";

interface Props {
  initialValues?: Partial<FactoryFormValues>;
  loading?: boolean;
  onSubmit: (data: FactoryFormValues) => void | Promise<void>;
}

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

export default function FactoryForm({ initialValues, loading = false, onSubmit }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FactoryFormValues>({
    resolver: zodResolver(factorySchema),
    defaultValues: {
      code: "",
      name: "",
      city: "",
      state: "",
      country: "India",
      contactPerson: "",
      email: "",
      phone: "",
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
              label="Factory Code"
              validateStatus={errors.code ? "error" : ""}
              help={errors.code?.message}
            >
              <Controller
                name="code"
                control={control}
                render={({ field }) => <Input placeholder="FAC-001" {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Factory Name"
              validateStatus={errors.name ? "error" : ""}
              help={errors.name?.message}
            >
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input placeholder="Factory Name" {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="City"
              validateStatus={errors.city ? "error" : ""}
              help={errors.city?.message}
            >
              <Controller
                name="city"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="State"
              validateStatus={errors.state ? "error" : ""}
              help={errors.state?.message}
            >
              <Controller
                name="state"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Country"
              validateStatus={errors.country ? "error" : ""}
              help={errors.country?.message}
            >
              <Controller
                name="country"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Contact Person"
              validateStatus={errors.contactPerson ? "error" : ""}
              help={errors.contactPerson?.message}
            >
              <Controller
                name="contactPerson"
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

        <AppButton type="primary" htmlType="submit" loading={loading}>
          Save Factory
        </AppButton>
      </Form>
    </Card>
  );
}

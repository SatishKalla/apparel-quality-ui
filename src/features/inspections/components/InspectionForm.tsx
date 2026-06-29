import { Button, Card, DatePicker, Form, Input, InputNumber, Select } from "antd";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";

import { inspectionSchema, type InspectionFormValues } from "../validation/inspection.schema";

interface Props {
  initialValues?: Partial<InspectionFormValues>;
  loading?: boolean;
  onSubmit: (data: InspectionFormValues) => void | Promise<void>;
}

const statusOptions = [
  { label: "Passed", value: "Passed" },
  { label: "Pending", value: "Pending" },
  { label: "Rejected", value: "Rejected" },
];

export default function InspectionForm({ initialValues, loading, onSubmit }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InspectionFormValues>({
    resolver: zodResolver(inspectionSchema),
    defaultValues: initialValues ?? {
      styleNo: "",
      buyer: "",
      factory: "",
      inspector: "",
      inspectionDate: dayjs().format("YYYY-MM-DD"),
      quantity: 0,
      inspectedQuantity: 0,
      defectCount: 0,
      status: "Pending",
    },
  });

  return (
    <Card>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label="Style Number"
          validateStatus={errors.styleNo ? "error" : ""}
          help={errors.styleNo?.message}
        >
          <Controller
            name="styleNo"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item
          label="Buyer"
          validateStatus={errors.buyer ? "error" : ""}
          help={errors.buyer?.message}
        >
          <Controller name="buyer" control={control} render={({ field }) => <Input {...field} />} />
        </Form.Item>

        <Form.Item
          label="Factory"
          validateStatus={errors.factory ? "error" : ""}
          help={errors.factory?.message}
        >
          <Controller
            name="factory"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item
          label="Inspector"
          validateStatus={errors.inspector ? "error" : ""}
          help={errors.inspector?.message}
        >
          <Controller
            name="inspector"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item
          label="Inspection Date"
          validateStatus={errors.inspectionDate ? "error" : ""}
          help={errors.inspectionDate?.message}
        >
          <Controller
            name="inspectionDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                style={{ width: "100%" }}
                value={field.value ? dayjs(field.value) : null}
                onChange={(date) => field.onChange(date?.format("YYYY-MM-DD") ?? "")}
              />
            )}
          />
        </Form.Item>

        <Form.Item label="Quantity">
          <Controller
            name="quantity"
            control={control}
            render={({ field }) => <InputNumber style={{ width: "100%" }} {...field} />}
          />
        </Form.Item>

        <Form.Item label="Inspected Quantity">
          <Controller
            name="inspectedQuantity"
            control={control}
            render={({ field }) => <InputNumber style={{ width: "100%" }} {...field} />}
          />
        </Form.Item>

        <Form.Item label="Defect Count">
          <Controller
            name="defectCount"
            control={control}
            render={({ field }) => <InputNumber style={{ width: "100%" }} {...field} />}
          />
        </Form.Item>

        <Form.Item label="Status">
          <Controller
            name="status"
            control={control}
            render={({ field }) => <Select {...field} options={statusOptions} />}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={loading}>
          Save Inspection
        </Button>
      </Form>
    </Card>
  );
}

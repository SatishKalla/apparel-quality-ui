import { Table, type TableProps } from "antd";

export default function AppTable<T extends object>(props: TableProps<T>) {
  return (
    <Table<T>
      rowKey="id"
      pagination={{
        pageSize: 10,
        showSizeChanger: true,
      }}
      {...props}
    />
  );
}

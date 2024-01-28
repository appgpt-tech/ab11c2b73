import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const OrdersTitle = () => {
  const record = useRecordContext();
  return <span>Orders {record ? `"${ record.id }"` : ""}</span>;
};

export const OrdersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="orderId" />
<TextField source="customerId" />
<TextField source="amount" />
<TextField source="shippingAddress" />
<TextField source="orderAddress" />
<TextField source="orderEmail" />
<TextField source="orderDate" />
<TextField source="orderStatus" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const OrdersEdit = () => (
                    <Edit title={<OrdersTitle />}>
                      <SimpleForm>
                          <TextInput source="orderId"   />
<TextInput source="customerId"   />
<TextInput source="amount"   />
<TextInput source="shippingAddress"   />
<TextInput source="orderAddress"   />
<TextInput source="orderEmail"   />
<TextInput source="orderDate"   />
<TextInput source="orderStatus"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const OrdersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="orderId"   />
<TextInput source="customerId"   />
<TextInput source="amount"   />
<TextInput source="shippingAddress"   />
<TextInput source="orderAddress"   />
<TextInput source="orderEmail"   />
<TextInput source="orderDate"   />
<TextInput source="orderStatus"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,
,
,
,
,

    ];



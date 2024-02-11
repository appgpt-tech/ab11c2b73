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
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput
} from "react-admin";
import { useRecordContext } from "react-admin";
const ReadOnlyPasswordField = ({ record, source }) => {

  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword =  '********';

  return (
      <span>{maskedPassword}</span>
  );
};
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const ordersTitle = () => {
  const record = useRecordContext();
  return <span>orders {record ? `"${ record.id }"` : ""}</span>;
};

export const ordersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <ReferenceField source="customerId" reference="customers"  />
<NumberField source="totalAmount" />
<NumberField source="vat" />
<NumberField source="productTotalAmount" />
<NumberField source="shippingCost" />
<TextField source="shippingAddress" />
<TextField source="orderAddress" />
<EmailField source="orderEmail" />
<DateField source="orderDate" />
<TextField source="orderStatus" />
<TextField source="trackingNo" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ordersEdit = () => (
                    <Edit title={<ordersTitle />}>
                      <SimpleForm>
                          <ReferenceInput source="customerId"  reference="customers"   />
<NumberInput source="totalAmount"   />
<NumberInput source="vat"   />
<NumberInput source="productTotalAmount"   />
<NumberInput source="shippingCost"   />
<TextInput source="shippingAddress"   />
<TextInput source="orderAddress"   />
<TextInput source="orderEmail"   />
<DateInput source="orderDate"   />
<TextInput source="orderStatus"   />
<TextInput source="trackingNo"   />
                      </SimpleForm>
                    </Edit>
                  );

export const ordersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <ReferenceInput source="customerId"  reference="customers"   />
<NumberInput source="totalAmount"   />
<NumberInput source="vat"   />
<NumberInput source="productTotalAmount"   />
<NumberInput source="shippingCost"   />
<TextInput source="shippingAddress"   />
<TextInput source="orderAddress"   />
<TextInput source="orderEmail"   />
<DateInput source="orderDate"   />
<TextInput source="orderStatus"   />
<TextInput source="trackingNo"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="customerId" label="customerId" reference="customers"   alwaysOn/>,
,
,
,
,
,
,
,
,
,

    ];



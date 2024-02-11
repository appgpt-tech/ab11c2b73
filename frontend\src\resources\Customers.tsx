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
const CustomersTitle = () => {
  const record = useRecordContext();
  return <span>Customers {record ? `"${ record.customerId }"` : ""}</span>;
};

export const CustomersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="customerId" />
<EmailField source="email" />
<ReadOnlyPasswordField source="password" />
<TextField source="name" />
<TextField source="billingAddress" />
<TextField source="defaultShippingAddress" />
<TextField source="country" />
<TextField source="phone" />
<ReferenceField source="cartId" reference="ShoppingCart"  /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const CustomersEdit = () => (
                    <Edit title={<CustomersTitle />}>
                      <SimpleForm>
                          <NumberInput source="customerId"   />
<TextInput source="email"   />
<PasswordInput source="password"   />
<TextInput source="name"   />
<TextInput source="billingAddress"   />
<TextInput source="defaultShippingAddress"   />
<TextInput source="country"   />
<TextInput source="phone"   />
<ReferenceInput source="cartId"  reference="ShoppingCart"   />
                      </SimpleForm>
                    </Edit>
                  );

export const CustomersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="customerId"   />
<TextInput source="email"   />
<PasswordInput source="password"   />
<TextInput source="name"   />
<TextInput source="billingAddress"   />
<TextInput source="defaultShippingAddress"   />
<TextInput source="country"   />
<TextInput source="phone"   />
<ReferenceInput source="cartId"  reference="ShoppingCart"   />
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
<ReferenceInput source="cartId" label="cartId" reference="ShoppingCart"   alwaysOn/>,

    ];



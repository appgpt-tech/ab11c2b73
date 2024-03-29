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
const customersTitle = () => {
  const record = useRecordContext();
  return <span>customers {record ? `"${ record.id }"` : ""}</span>;
};

export const customersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <EmailField source="email" />
<ReadOnlyPasswordField source="password" />
<TextField source="name" />
<TextField source="billingAddress" />
<TextField source="shippingAddress" />
<TextField source="country" />
<TextField source="phone" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const customersEdit = () => (
                    <Edit title={<customersTitle />}>
                      <SimpleForm>
                          <TextInput source="email"   />
<PasswordInput source="password"   />
<TextInput source="name"   />
<TextInput source="billingAddress"   />
<TextInput source="shippingAddress"   />
<TextInput source="country"   />
<TextInput source="phone"   />
                      </SimpleForm>
                    </Edit>
                  );

export const customersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="email"   />
<PasswordInput source="password"   />
<TextInput source="name"   />
<TextInput source="billingAddress"   />
<TextInput source="shippingAddress"   />
<TextInput source="country"   />
<TextInput source="phone"   />
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

    ];



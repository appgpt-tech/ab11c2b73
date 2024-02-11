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
const vendorsTitle = () => {
  const record = useRecordContext();
  return <span>vendors {record ? `"${ record.companyName }"` : ""}</span>;
};

export const vendorsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="companyName" />
<TextField source="contactName" />
<EmailField source="email" />
<ReadOnlyPasswordField source="password" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const vendorsEdit = () => (
                    <Edit title={<vendorsTitle />}>
                      <SimpleForm>
                          <TextInput source="companyName"   />
<TextInput source="contactName"   />
<TextInput source="email"   />
<PasswordInput source="password"   />
                      </SimpleForm>
                    </Edit>
                  );

export const vendorsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="companyName"   />
<TextInput source="contactName"   />
<TextInput source="email"   />
<PasswordInput source="password"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,

    ];



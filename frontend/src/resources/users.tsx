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
const usersTitle = () => {
  const record = useRecordContext();
  return <span>users {record ? `"${ record.id }"` : ""}</span>;
};

export const usersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="name" />
<EmailField source="email" />
<ReadOnlyPasswordField source="password" />
<TextField source="role" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const usersEdit = () => (
                    <Edit title={<usersTitle />}>
                      <SimpleForm>
                          <TextInput source="name"   />
<TextInput source="email"   />
<PasswordInput source="password"   />
<TextInput source="role"   />
                      </SimpleForm>
                    </Edit>
                  );

export const usersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="name"   />
<TextInput source="email"   />
<PasswordInput source="password"   />
<TextInput source="role"   />
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



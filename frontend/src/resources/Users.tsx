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
const UsersTitle = () => {
  const record = useRecordContext();
  return <span>Users {record ? `"${ record.id }"` : ""}</span>;
};

export const UsersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="id" />
<TextField source="name" />
<TextField source="email" />
<TextField source="username" />
<TextField source="password" />
<TextField source="role" />
<TextField source="dateCreated" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const UsersEdit = () => (
                    <Edit title={<UsersTitle />}>
                      <SimpleForm>
                          <TextInput source="id"   disabled/>
<TextInput source="name"   />
<TextInput source="email"   />
<TextInput source="username"   />
<TextInput source="password"   />
<TextInput source="role"   />
<TextInput source="dateCreated"   />
                      </SimpleForm>
                    </Edit>
                  );

export const UsersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="id"   disabled/>
<TextInput source="name"   />
<TextInput source="email"   />
<TextInput source="username"   />
<TextInput source="password"   />
<TextInput source="role"   />
<TextInput source="dateCreated"   />
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

    ];



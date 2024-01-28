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
const CustomersTitle = () => {
  const record = useRecordContext();
  return <span>Customers {record ? `"${ record.name }"` : ""}</span>;
};

export const CustomersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="customerId" />
<TextField source="email" />
<TextField source="password" />
<TextField source="name" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const CustomersEdit = () => (
                    <Edit title={<CustomersTitle />}>
                      <SimpleForm>
                          <TextInput source="customerId"   />
<TextInput source="email"   />
<TextInput source="password"   />
<TextInput source="name"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const CustomersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="customerId"   />
<TextInput source="email"   />
<TextInput source="password"   />
<TextInput source="name"   />
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

    ];



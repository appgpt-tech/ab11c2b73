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
const StudentTitle = () => {
  const record = useRecordContext();
  return <span>Student {record ? `"${ record.id }"` : ""}</span>;
};

export const StudentList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="id" />
<TextField source="name" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const StudentEdit = () => (
                    <Edit title={<StudentTitle />}>
                      <SimpleForm>
                          <NumberInput source="id"   disabled/>
<TextInput source="name"   />
                      </SimpleForm>
                    </Edit>
                  );

export const StudentCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="id"   disabled/>
<TextInput source="name"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,

    ];



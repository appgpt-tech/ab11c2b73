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
const ActivityTitle = () => {
  const record = useRecordContext();
  return <span>Activity {record ? `"${ record.id }"` : ""}</span>;
};

export const ActivityList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="id" />
<TextField source="description" />
<TextField source="tutorName" />
<TextField source="costPerLesson" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ActivityEdit = () => (
                    <Edit title={<ActivityTitle />}>
                      <SimpleForm>
                          <NumberInput source="id"   disabled/>
<TextInput source="description"   />
<TextInput source="tutorName"   />
<TextInput source="costPerLesson"   />
                      </SimpleForm>
                    </Edit>
                  );

export const ActivityCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="id"   disabled/>
<TextInput source="description"   />
<TextInput source="tutorName"   />
<TextInput source="costPerLesson"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];



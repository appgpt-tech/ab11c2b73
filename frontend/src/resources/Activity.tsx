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
          <TextField source="id" />
<TextField source="description" />
<TextField source="nameoftheTutor" />
<TextField source="costperlesson" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ActivityEdit = () => (
                    <Edit title={<ActivityTitle />}>
                      <SimpleForm>
                          <TextInput source="id"   disabled/>
<TextInput source="description"   />
<TextInput source="nameoftheTutor"   />
<TextInput source="costperlesson"   />
                      </SimpleForm>
                    </Edit>
                  );

export const ActivityCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="id"   disabled/>
<TextInput source="description"   />
<TextInput source="nameoftheTutor"   />
<TextInput source="costperlesson"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];



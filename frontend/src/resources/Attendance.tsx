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
const AttendanceTitle = () => {
  const record = useRecordContext();
  return <span>Attendance {record ? `"${ record.id }"` : ""}</span>;
};

export const AttendanceList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="id" />
<TextField source="date" />
<TextField source="time" />
<TextField source="studentid" />
<TextField source="activityid" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const AttendanceEdit = () => (
                    <Edit title={<AttendanceTitle />}>
                      <SimpleForm>
                          <TextInput source="id"   disabled/>
<TextInput source="date"   />
<TextInput source="time"   />
<TextInput source="studentid"   />
<TextInput source="activityid"   />
                      </SimpleForm>
                    </Edit>
                  );

export const AttendanceCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="id"   disabled/>
<TextInput source="date"   />
<TextInput source="time"   />
<TextInput source="studentid"   />
<TextInput source="activityid"   />
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



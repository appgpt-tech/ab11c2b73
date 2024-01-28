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
          <NumberField source="id" />
<TextField source="date" />
<TextField source="time" />
<NumberField source="studentId" />
<NumberField source="activityId" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const AttendanceEdit = () => (
                    <Edit title={<AttendanceTitle />}>
                      <SimpleForm>
                          <NumberInput source="id"   disabled/>
<TextInput source="date"   />
<TextInput source="time"   />
<NumberInput source="studentId"   />
<NumberInput source="activityId"   />
                      </SimpleForm>
                    </Edit>
                  );

export const AttendanceCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="id"   disabled/>
<TextInput source="date"   />
<TextInput source="time"   />
<NumberInput source="studentId"   />
<NumberInput source="activityId"   />
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



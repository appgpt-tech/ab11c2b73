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
const paymentsTitle = () => {
  const record = useRecordContext();
  return <span>payments {record ? `"${ record.orderId }"` : ""}</span>;
};

export const paymentsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="orderId" />
<NumberField source="amount" />
<TextField source="paymentMethod" />
<DateField source="paymentDate" />
<TextField source="paymentStatus" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const paymentsEdit = () => (
                    <Edit title={<paymentsTitle />}>
                      <SimpleForm>
                          <NumberInput source="orderId"   />
<NumberInput source="amount"   />
<TextInput source="paymentMethod"   />
<DateInput source="paymentDate"   />
<TextInput source="paymentStatus"   />
                      </SimpleForm>
                    </Edit>
                  );

export const paymentsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="orderId"   />
<NumberInput source="amount"   />
<TextInput source="paymentMethod"   />
<DateInput source="paymentDate"   />
<TextInput source="paymentStatus"   />
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

    ];


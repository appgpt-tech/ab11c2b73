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
const inventoryTitle = () => {
  const record = useRecordContext();
  return <span>inventory {record ? `"${ record.productId }"` : ""}</span>;
};

export const inventoryList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="productId" />
<NumberField source="quantity" />
<NumberField source="vendorId" />
<NumberField source="lowStockThreshold" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const inventoryEdit = () => (
                    <Edit title={<inventoryTitle />}>
                      <SimpleForm>
                          <NumberInput source="productId"   />
<NumberInput source="quantity"   />
<NumberInput source="vendorId"   />
<NumberInput source="lowStockThreshold"   />
                      </SimpleForm>
                    </Edit>
                  );

export const inventoryCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="productId"   />
<NumberInput source="quantity"   />
<NumberInput source="vendorId"   />
<NumberInput source="lowStockThreshold"   />
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



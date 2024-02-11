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
  return <span>inventory {record ? `"${ record.id }"` : ""}</span>;
};

export const inventoryList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <ReferenceField source="productId" reference="products"  />
<NumberField source="quantity" />
<ReferenceField source="vendorId" reference="vendors"  />
<NumberField source="lowStockThreshold" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const inventoryEdit = () => (
                    <Edit title={<inventoryTitle />}>
                      <SimpleForm>
                          <ReferenceInput source="productId"  reference="products"   />
<NumberInput source="quantity"   />
<ReferenceInput source="vendorId"  reference="vendors"   />
<NumberInput source="lowStockThreshold"   />
                      </SimpleForm>
                    </Edit>
                  );

export const inventoryCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <ReferenceInput source="productId"  reference="products"   />
<NumberInput source="quantity"   />
<ReferenceInput source="vendorId"  reference="vendors"   />
<NumberInput source="lowStockThreshold"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="productId" label="productId" reference="products"   alwaysOn/>,
,
<ReferenceInput source="vendorId" label="vendorId" reference="vendors"   alwaysOn/>,

    ];



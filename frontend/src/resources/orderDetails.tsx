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
const orderDetailsTitle = () => {
  const record = useRecordContext();
  return <span>orderDetails {record ? `"${ record.id }"` : ""}</span>;
};

export const orderDetailsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <ReferenceField source="orderId" reference="orders"  />
<ReferenceField source="productId" reference="products"  />
<NumberField source="price" />
<NumberField source="quantity" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const orderDetailsEdit = () => (
                    <Edit title={<orderDetailsTitle />}>
                      <SimpleForm>
                          <ReferenceInput source="orderId"  reference="orders"   />
<ReferenceInput source="productId"  reference="products"   />
<NumberInput source="price"   />
<NumberInput source="quantity"   />
                      </SimpleForm>
                    </Edit>
                  );

export const orderDetailsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <ReferenceInput source="orderId"  reference="orders"   />
<ReferenceInput source="productId"  reference="products"   />
<NumberInput source="price"   />
<NumberInput source="quantity"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="orderId" label="orderId" reference="orders"   alwaysOn/>,
<ReferenceInput source="productId" label="productId" reference="products"   alwaysOn/>,
,

    ];



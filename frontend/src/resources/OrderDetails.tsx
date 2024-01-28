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
const OrderDetailsTitle = () => {
  const record = useRecordContext();
  return <span>OrderDetails {record ? `"${ record.id }"` : ""}</span>;
};

export const OrderDetailsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="id" />
<TextField source="orderId" />
<TextField source="productId" />
<TextField source="price" />
<TextField source="sku" />
<TextField source="quantity" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const OrderDetailsEdit = () => (
                    <Edit title={<OrderDetailsTitle />}>
                      <SimpleForm>
                          <TextInput source="id"   disabled/>
<TextInput source="orderId"   />
<TextInput source="productId"   />
<TextInput source="price"   />
<TextInput source="sku"   />
<TextInput source="quantity"   />
                      </SimpleForm>
                    </Edit>
                  );

export const OrderDetailsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="id"   disabled/>
<TextInput source="orderId"   />
<TextInput source="productId"   />
<TextInput source="price"   />
<TextInput source="sku"   />
<TextInput source="quantity"   />
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



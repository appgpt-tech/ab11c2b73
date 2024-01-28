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
const ProductsTitle = () => {
  const record = useRecordContext();
  return <span>Products {record ? `"${ record.name }"` : ""}</span>;
};

export const ProductsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="productId" />
<TextField source="sku" />
<TextField source="name" />
<TextField source="price" />
<TextField source="weight" />
<TextField source="description" />
<TextField source="thumbnail" />
<TextField source="image" />
<TextField source="categoryId" />
<TextField source="createDate" />
<TextField source="stock" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ProductsEdit = () => (
                    <Edit title={<ProductsTitle />}>
                      <SimpleForm>
                          <TextInput source="productId"   />
<TextInput source="sku"   />
<TextInput source="name"   />
<TextInput source="price"   />
<TextInput source="weight"   />
<TextInput source="description"   />
<TextInput source="thumbnail"   />
<TextInput source="image"   />
<TextInput source="categoryId"   />
<TextInput source="createDate"   />
<TextInput source="stock"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const ProductsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="productId"   />
<TextInput source="sku"   />
<TextInput source="name"   />
<TextInput source="price"   />
<TextInput source="weight"   />
<TextInput source="description"   />
<TextInput source="thumbnail"   />
<TextInput source="image"   />
<TextInput source="categoryId"   />
<TextInput source="createDate"   />
<TextInput source="stock"   />
<NumberInput source="id"   disabled/>
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
,
,
,
,
,
,

    ];



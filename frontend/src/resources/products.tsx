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
const productsTitle = () => {
  const record = useRecordContext();
  return <span>products {record ? `"${ record.id }"` : ""}</span>;
};

export const productsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <ReferenceField source="vendorId" reference="vendors"  />
<TextField source="name" />
<NumberField source="price" />
<NumberField source="weight" />

<ImageField source="thumbnail" />
<ImageField source="image" />
<ReferenceField source="category" reference="productCategories"  />
<DateField source="createdDate" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const productsEdit = () => (
                    <Edit title={<productsTitle />}>
                      <SimpleForm>
                          <ReferenceInput source="vendorId"  reference="vendors"   />
<TextInput source="name"   />
<NumberInput source="price"   />
<NumberInput source="weight"   />
<TextInput source="description"   />
<ImageInput source="thumbnail"   />
<ImageInput source="image"   />
<ReferenceInput source="category"  reference="productCategories"   />
<DateInput source="createdDate"   />
                      </SimpleForm>
                    </Edit>
                  );

export const productsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <ReferenceInput source="vendorId"  reference="vendors"   />
<TextInput source="name"   />
<NumberInput source="price"   />
<NumberInput source="weight"   />
<TextInput source="description"   />
<ImageInput source="thumbnail"   />
<ImageInput source="image"   />
<ReferenceInput source="category"  reference="productCategories"   />
<DateInput source="createdDate"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="vendorId" label="vendorId" reference="vendors"   alwaysOn/>,
,
,
,
,
,
,
<ReferenceInput source="category" label="category" reference="productCategories"   alwaysOn/>,

    ];



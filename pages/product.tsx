import React, { FC, useEffect, useMemo, useState } from 'react'
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table'
import Layout from '../components/Layout'
import axios from 'axios'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import DeleteConfirmation from '../components/Confirmation/DeleteConfirmation'
import AddIcon from '@mui/icons-material/Add'
import AddNewProduct from '../containers/ProductContainer/AddNewProduct'

type IAncestor = {
  _id: string
  name: string
  slug: string
}

type ICategory = {
  _id: string
  name: string
  slug: string
  updatedAt: string
  order: number
  icon: string
  thumbnail: string
  parent: string
  isShow: boolean
  ancestors?: IAncestor[]
  children?: ICategory[]
}

const columns = [
  {
    header: 'ID',
    id: '_id',
  },
  {
    header: 'Name',
    id: 'name',
  },
  {
    header: 'Order',
    id: 'order',
  },
  {
    header: 'Parent',
    id: 'parent',
  },
] as MRT_ColumnDef<ICategory>[]

const ProductPage: FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([])
  const [deleteItem, setDeleteItem] = useState<ICategory | null>(null)
  const [openAddNewProduct, setOpenAddNewProduct] = useState(false)
  //must be memoized or stable

  useEffect(() => {
    try {
      axios
        .get(`${process.env.API_ENDPOINT}/v1/categories/all-categories`)
        .then((res) => {
          setCategories(res.data)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleClose = () => {
    setDeleteItem(null)
  }

  const handleConfirm = () => {
    if (deleteItem) {
      try {
        axios
          .delete(`${process.env.API_ENDPOINT}/v1/categories/${deleteItem._id}`)
          .then(() => {
            setDeleteItem(null)
          })
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleToggleAddNewProduct = () => {
    setOpenAddNewProduct((prev) => !prev)
  }

  return (
    <Layout title="Category">
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleToggleAddNewProduct}
        size="small"
        sx={{ mb: 2 }}
      >
        Add Product
      </Button>

      {openAddNewProduct ? (
        <AddNewProduct handleClose={handleToggleAddNewProduct} />
      ) : null}

      <MaterialReactTable
        columns={columns}
        data={categories}
        enableRowActions
        renderRowActions={({ row }) => (
          <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '0.5rem' }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => {
                console.log('Edit category', row)
              }}
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => {
                setDeleteItem(row?.original)
              }}
              startIcon={<DeleteIcon />}
            >
              Remove
            </Button>
          </div>
        )}
      />
      {deleteItem ? (
        <DeleteConfirmation
          handleClose={handleClose}
          handleConfirm={handleConfirm}
          title="Confirm delete"
          description={`Please confirm that you want to delete "${deleteItem.name}"`}
        />
      ) : null}
    </Layout>
  )
}

export default ProductPage

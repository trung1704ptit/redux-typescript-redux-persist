import * as React from 'react'
import { useState, useRef } from 'react'
import { useTheme } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import { SxProps } from '@mui/system'

import MenuIcon from '@mui/icons-material/Menu'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

import Logo from './Logo'
import navbarList from './navList'
import StyledAvatar from './StyledAvatar'
import Link from 'next/link'
import Head from 'next/head'

const drawerWidthOpen = 240
const paddingIconButton = 10
const marginIconButton = 14
const iconFontSize = 20
const drawerWidthClose =
  (paddingIconButton + marginIconButton) * 2 + iconFontSize

const iconButtonSx: SxProps = {
  color: 'lightGray',
}

interface Props {
  children?: React.ReactNode
  title?: string
}

export default function SideNavbar({ children, title }: Props) {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const refFocus = useRef<HTMLInputElement>(null)

  function toogleOpen(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setOpen(!open)
  }

  function toogleOpenSearch() {
    setOpen(false)
    setTimeout(() => {
      if (refFocus.current !== null) {
        refFocus.current.focus()
      }
    }, 500)
  }

  const drawerContent = (
    <>
      <Link href="/">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 'auto',
            backgroundColor: 'transparent',
            margin: '14px 14px',
            borderBottom: '1px solid lightgray',
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              display: open ? 'none' : { xs: 'none', sm: 'initial' },
            }}
          >
            <Logo />
          </Box>
          <Typography
            variant="h1"
            noWrap={true}
            gutterBottom
            sx={{
              display: { xs: 'none', sm: 'initial' },
              fontSize: '18px',
              fontWeight: 600,
              color: 'lightgray',
              width: '154px',
              margin: 0,
              padding: 0,
              textAlign: 'center',
            }}
          >
            OnlineShop
          </Typography>

          <Button
            onClick={toogleOpen}
            sx={{
              minWidth: 'initial',
              padding: '10px',
              color: 'gray',
              borderRadius: '8px',
              backgroundColor: open ? 'transparent' : 'transparent',
              '&:hover': {
                backgroundColor: '#26284687',
              },
            }}
          >
            <MenuIcon
              sx={{ fontSize: '20px', color: open ? 'lightgray' : 'lightGray' }}
            ></MenuIcon>
          </Button>
        </Box>
      </Link>

      <List dense={true}>
        {navbarList.map((item, index) => (
          <>
            {index === 0 ? (
              <>
                <Tooltip
                  title={open ? item.desc : ''}
                  key={item.path}
                  placement={'right'}
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: 'gray',
                        color: 'white',
                        marginLeft: '22px !important',
                        boxShadow: '0px 0px 22px -2px rgba(0,0,0,0.20)',
                      },
                    },
                  }}
                >
                  <ListItemButton
                    onClick={toogleOpenSearch}
                    sx={{
                      margin: '6px 14px',
                      padding: '10px',
                      borderRadius: '8px',
                      backgroundColor: '#26284687',
                    }}
                    key={0}
                  >
                    <ListItemIcon sx={{ minWidth: '46px' }}>
                      <Badge
                        badgeContent={item.badge}
                        color="secondary"
                        variant="dot"
                      >
                        <item.icon
                          sx={{ fontSize: '20px', color: 'lightgray' }}
                        />
                      </Badge>
                    </ListItemIcon>

                    <InputBase
                      inputRef={refFocus}
                      margin="dense"
                      fullWidth={true}
                      placeholder="Search"
                      sx={{
                        fontSize: '0.875rem',
                        lineHeight: '1.43em',
                        '& .MuiInputBase-input': {
                          color: 'lightgray',
                          padding: 0,
                        },
                      }}
                    ></InputBase>
                  </ListItemButton>
                </Tooltip>
                <Divider variant="middle" light={true} />
              </>
            ) : (
              <Tooltip
                title={open ? item.desc : ''}
                placement={'right'}
                key={item.path}
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: 'gray',
                      color: 'white',
                      marginLeft: '22px !important',
                      boxShadow: '0px 0px 22px -2px rgba(0,0,0,0.20)',
                    },
                  },
                }}
              >
                <Link href={{ pathname: item.path }} key={item.path}>
                  <ListItemButton
                    sx={{
                      margin: '2px 14px',
                      padding: '10px',
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: '#26284687',
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: '46px' }}>
                      <Badge
                        badgeContent={item.badge}
                        color="secondary"
                        variant="dot"
                      >
                        <item.icon
                          sx={{ fontSize: '20px', color: 'lightgray' }}
                        />
                      </Badge>
                    </ListItemIcon>

                    <ListItemText
                      primary={item.desc}
                      primaryTypographyProps={{
                        variant: 'body2',
                      }}
                      sx={{
                        display: 'inline',
                        margin: '0px',
                        overflowX: 'hidden',
                        color: 'lightgray',
                        whiteSpace: 'nowrap',
                        minWidth: '126px',
                      }}
                    />
                    {item.badge !== 0 ? (
                      <Chip
                        label={item.badge}
                        color={'secondary'}
                        size="small"
                        sx={{ height: 'auto' }}
                      />
                    ) : null}
                  </ListItemButton>
                </Link>
              </Tooltip>
            )}
          </>
        ))}
        <Divider variant="middle" light={true} />
      </List>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          alignContents: 'center',
          margin: '14px 14px',
          padding: '12px 4px',
          borderTop: '1px solid lightgray',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            marginRight: '18px',
            paddingLeft: '0px',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <StyledAvatar />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Typography
            component="span"
            variant="body2"
            sx={{
              fontFamily: 'inherit',
              display: 'block',
              whiteSpace: 'nowrap',
              lineHeight: 'inherit',
              fontWeight: 500,
              color: 'lightgray',
            }}
          >
            Trung Nguyen
          </Typography>
          <Typography
            component="span"
            variant="body2"
            sx={{
              display: 'block',
              whiteSpace: 'nowrap',
              lineHeight: 'inherit',
              color: 'lightgray',
            }}
          >
            Fullstack Developer
          </Typography>
        </Box>
        <IconButton sx={iconButtonSx}>
          <ExitToAppIcon />
        </IconButton>
      </Box>
    </>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="An example of containerized redux with typescript and redux-persistence."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open
            ? { xs: '0px', sm: drawerWidthClose }
            : { xs: drawerWidthClose, sm: drawerWidthOpen },
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: open
              ? theme.transitions.duration.leavingScreen
              : theme.transitions.duration.enteringScreen,
          }),
          '& .MuiDrawer-paper': {
            display: 'block',
            overflowX: 'hidden',
            width: open
              ? { xs: '0px', sm: drawerWidthClose }
              : { xs: drawerWidthClose, sm: drawerWidthOpen },
            borderRight: '0px',
            borderRadius: '0px 16px 16px 0px',
            boxShadow: theme.shadows[8],
            backgroundColor: open ? '#11101D' : '#11101D',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: open
                ? theme.transitions.duration.leavingScreen
                : theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Box sx={{ padding: '10px', width: '100%' }}>{children}</Box>
    </Box>
  )
}

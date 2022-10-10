import { Link } from 'react-router-dom'

import * as React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import { MdNotificationsActive } from 'react-icons/md'
import { AiOutlineLineChart } from 'react-icons/ai'
import { BsPencilSquare, BsDot } from 'react-icons/bs'

function TwitterSidebar() {
  const [openSummary, setOpenSummary] = React.useState(false)
  const [sidebarCollapse, setSidebarCollapse] = React.useState('')
  const [sidebarLink, setSidebarLink] = React.useState('')

  const [openPublish, setOpenPublish] = React.useState(false)

  return (
    <div className='flex flex-col'>
      <Link to='/twitter/notification'>
        <ListItemButton onClick={() => setSidebarCollapse('notification')} style={sidebarCollapse === 'notification' ? { backgroundColor: 'rgb(245, 68, 97)' } : { color: 'white' }}>
          <ListItemIcon>
            <MdNotificationsActive style={sidebarCollapse === 'notification' ? { color: 'white' } : ''} className='text-red' />
          </ListItemIcon>
          <ListItemText primary='NOTIFICATIONS' />
          <ListItemText className='ml-1 px-2 border rounded-md  border-green' primary='29' />

        </ListItemButton>
      </Link>

      <ListItemButton
        style={sidebarCollapse === 'summarry' ? { backgroundColor: 'rgb(245, 68, 97)' } : { color: 'white' }}
        onClick={() => {
          setOpenSummary(!openSummary)
          setSidebarCollapse('summarry')
        }}
      >
        <ListItemIcon>
          <AiOutlineLineChart style={sidebarCollapse === 'summarry' ? { color: 'white' } : ''} className='text-red' />
        </ListItemIcon>
        <ListItemText primary='SUMMARY' />
        {openSummary ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Link to='/twitter/summary'>
        <Collapse in={openSummary} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton
              onClick={() => {
                setSidebarLink('test')
                setSidebarCollapse('summarry')
              }}
              sx={{ pl: 4 }}
            >
              <ListItemIcon>
                <BsDot style={sidebarLink === 'test' ? { color: 'rgb(245, 68, 97)' } : { color: 'white' }} />
              </ListItemIcon>
              <ListItemText style={sidebarLink === 'test' ? { color: 'rgb(245, 68, 97)' } : { color: 'white' }} primary='Test' />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>

      <ListItemButton
        style={sidebarCollapse === 'publish' ? { backgroundColor: 'rgb(245, 68, 97)' } : { color: 'white' }}
        onClick={(prev) => {
          setOpenPublish(!openPublish)
          setSidebarCollapse('publish')
        }}
      >
        <ListItemIcon>
          <BsPencilSquare style={sidebarCollapse === 'publish' ? { color: 'white' } : ''} className='text-red' />
        </ListItemIcon>
        <ListItemText primary='PUBLISH' />
        {openPublish ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openPublish} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <Link to='/twitter/compose'>
            <ListItemButton
              onClick={() => {
                setSidebarCollapse('publish')
                setSidebarLink('compose')
              }}
              sx={{ pl: 4 }}
            >
              <ListItemIcon>
                <BsDot style={sidebarLink === 'compose' ? { color: 'rgb(245, 68, 97)' } : { color: 'white' }} />
              </ListItemIcon>
              <ListItemText style={sidebarLink === 'compose' ? { color: 'rgb(245, 68, 97)' } : { color: 'white' }} primary='Compose' />
            </ListItemButton>
          </Link>
          <Link to='/twitter/feed'>
            <ListItemButton
              onClick={() => {
                setSidebarCollapse('publish')
                setSidebarLink('feed')
              }}
              sx={{ pl: 4 }}
            >
              <ListItemIcon>
                <BsDot style={sidebarLink === 'feed' ? { color: 'rgb(245, 68, 97)' } : { color: 'white' }} />
              </ListItemIcon>
              <ListItemText style={sidebarLink === 'feed' ? { color: 'rgb(245, 68, 97)' } : { color: 'white' }} primary='Feed' />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </div>
  )
}

export default TwitterSidebar

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
  const [openPublish, setOpenPublish] = React.useState(false)

  return (
    <div className='flex flex-col'>
      <Link to='/twitter/notification'>
        <ListItemButton>
          <ListItemIcon>
            <MdNotificationsActive className='sidebar-icon' />
          </ListItemIcon>
          <ListItemText primary='NOTIFICATIONS' />
        </ListItemButton>
      </Link>

      <ListItemButton onClick={(prev) => setOpenSummary(!openSummary)}>
        <ListItemIcon>
          <AiOutlineLineChart className='sidebar-icon' />
        </ListItemIcon>
        <ListItemText primary='SUMMARY' />
      </ListItemButton>
      <Link to='/twitter/summary'>
        <Collapse in={openSummary} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <BsDot className='sidebar-icon' />
              </ListItemIcon>
              <ListItemText primary='Test' />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>

      <ListItemButton onClick={(prev) => setOpenPublish(!openPublish)}>
        <ListItemIcon>
          <BsPencilSquare className='sidebar-icon' />
        </ListItemIcon>
        <ListItemText primary='Inbox' />
        {openPublish ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openPublish} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <Link to='/twitter/compose'>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <BsDot className='sidebar-icon' />
              </ListItemIcon>
              <ListItemText primary='Compose' />
            </ListItemButton>
          </Link>
          <Link to='/twitter/feed'>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <BsDot className='sidebar-icon' />
              </ListItemIcon>
              <ListItemText primary='Feed' />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </div>
  )
}

export default TwitterSidebar

import { useState } from 'react'
import { Link } from 'react-router-dom'

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
import { IoIosChatbubbles } from 'react-icons/io'
import { TbWaveSine } from 'react-icons/tb'
import { RiBarChartFill } from 'react-icons/ri'

function Brand3Sidebar() {
  const [sidebarCollapse, setSidebarCollapse] = useState('')
  const [sidebarLink, setSidebarLink] = useState('')
  const [openSummary, setOpenSummary] = useState(false)
  const [openPublish, setOpenPublish] = useState(false)
  const [openEngage, setOpenEngage] = useState(false)
  const [openListen, setOpenListen] = useState(false)
  const [openReport, setOpenReport] = useState(false)

  return (
    <div className='flex flex-col'>
      <Link to='/twitter/notification'>
        <ListItemButton
          onClick={() => setSidebarCollapse('notification')}
          style={sidebarCollapse === 'notification' ? { backgroundColor: 'rgb(245, 68, 97)' } : { color: 'white' }}
        >
          <ListItemIcon>
            <MdNotificationsActive
              style={sidebarCollapse === 'notification' ? { color: 'white' } : ''}
              className='text-red'
            />
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
      <Link to='/brand3/summary'>
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
              <ListItemText
                style={sidebarLink === 'test' ? { color: 'rgb(245, 68, 97)' } : { color: 'white' }}
                primary='Test'
              />
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
          <Link to='/brand3/compose'>
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
              <ListItemText
                style={sidebarLink === 'compose' ? { color: 'rgb(245, 68, 97)' } : { color: 'white' }}
                primary='Compose'
              />
            </ListItemButton>
          </Link>
          <Link to='/brand3/feed'>
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
              <ListItemText
                style={sidebarLink === 'feed' ? { color: 'rgb(245, 68, 97)' } : { color: 'white' }}
                primary='Feed'
              />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>

      <ListItemButton
        style={sidebarCollapse === 'engage' ? { backgroundColor: 'rgb(245, 68, 97)' } : { color: 'white' }}
        onClick={() => {
          setOpenEngage(!openEngage)
          setSidebarCollapse('engage')
        }}
      >
        <ListItemIcon>
          <IoIosChatbubbles style={sidebarCollapse === 'engage' ? { color: 'white' } : ''} className='text-red' />
        </ListItemIcon>
        <ListItemText primary='ENGAGE' />
        {openEngage ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <ListItemButton
        style={sidebarCollapse === 'listen' ? { backgroundColor: 'rgb(245, 68, 97)' } : { color: 'white' }}
        onClick={() => {
          setOpenListen(!openListen)
          setSidebarCollapse('listen')
        }}
      >
        <ListItemIcon>
          <TbWaveSine style={sidebarCollapse === 'listen' ? { color: 'white' } : ''} className='text-red' />
        </ListItemIcon>
        <ListItemText primary='LISTEN' />
        {openListen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <ListItemButton
        style={sidebarCollapse === 'report' ? { backgroundColor: 'rgb(245, 68, 97)' } : { color: 'white' }}
        onClick={() => {
          setOpenReport(!openReport)
          setSidebarCollapse('report')
        }}
      >
        <ListItemIcon>
          <RiBarChartFill style={sidebarCollapse === 'report' ? { color: 'white' } : ''} className='text-red' />
        </ListItemIcon>
        <ListItemText primary='REPORT' />
        {openReport ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
    </div>
  )
}

export default Brand3Sidebar

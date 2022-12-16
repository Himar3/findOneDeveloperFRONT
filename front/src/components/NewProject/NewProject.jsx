import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, Typography, Button, InputLabel, OutlinedInput, FormControl, TextField, Chip } from '@mui/material'  
import './NewProject.css'
import { useNavigate } from 'react-router'
import { createProject } from '../../services/project.services'

function NewProject() {
  const navigate = useNavigate()
  const [values, setValues] = React.useState({
    title: '',
    // type:'',
    link: '',
    image: '',
    description: '',
    team: ['']
  })

  const [members, setMembers ] = useState([])

  const handleDelete = (e) => {
    console.log('borra')
    // setMembers(members.filter(members.indexOf(e.parentNode.target),1))
  }
  // const key = e.target.getAtributte('key')


  const addMember = () => {
    setMembers(members => [...members, values.team]) 
  }

  const renderProvisionalMember = (members) => {
    return members?.map((member, i) => <Chip key= {i} value={member} sx={{ marginRight: '5px', marginBottom: '5px' }} label={member} onDelete={handleDelete}/>)
  }
  // const [label, setLabel] = React.useState('Repeat password')
  // let valid = true

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  
  const newProject = async () => {
    const project = {
      title: values.title,
      type: values.type,
      link: values.link,
      image: values.image,
        description: values.description,
        team: values.team
      }
      const response = await createProject(project)
      // navigate(`/projects/${id}`) 
    }
    
  useEffect(() => renderProvisionalMember()) 

  return (
    <Card className="profileBox" sx={{ maxWidth: 1400, minHeight: 500 }}>   
      <CardContent id="profile-content">
        <div className='mid-top mid-top-margin'>
          <div className='profile-name-email'>
          <div className="profile-title">
          <Typography variant="h3" >PROJECT</Typography>
          </div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Title</Typography>  
            <div className="profile-data">     
            <FormControl className='input-newProject' sx={{ m: 1, width: '25ch' }} variant="outlined">            
          <InputLabel>Title</InputLabel>
            <OutlinedInput
              id="outlined-adornment-name"
              type={values.title}
              value={values.title}
              onChange={handleChange('title')}
              label="Title"
            />
          </FormControl>
          </div>
          <br></br>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Type</Typography>
            <div className="profile-data">
            <FormControl className='input-newProject' sx={{ m: 1, width: '25ch' }} variant="outlined">            
          <InputLabel>Type</InputLabel>
            <OutlinedInput 
              sx={{ width: '100%' }}
              id="outlined-adornment-name"
              type={values.type}
              value={values.type}
              onChange={handleChange('type')}
              label="Type"
            />
          </FormControl>
            </div>
          </div>
          <div className='btn-profile-container'>
          <Typography className='profile-subtitles' variant="h6" color="text.secondary">Team</Typography>
          <Button onClick={() => addMember()} className='profile-btn' variant="contained" sx={{borderRadius: '5px'}}>Add Member</Button>
            <div className="profile-data">
            <FormControl className='input-newProject' sx={{ m: 1, width: '25ch' }} variant="outlined">            
          <InputLabel>Team</InputLabel>
            <OutlinedInput
              id="outlined-adornment-name"
              type="Team"
              value={values.team}
              onChange={handleChange('team')}
              label="Team"
            />
          </FormControl>
            {renderProvisionalMember(members)}
            </div>   
          </div>
            <div id='img-box'>
            <CardMedia
              className='project-img'
              component="img"
              src={require("../../assets/GitHub-Mark.png")}
              alt="Image Dev"
            />
          </div>
        </div>
        <div className='mid-bottom'>  
        <Typography className='profile-subtitles' variant="h6" color="text.secondary">Link</Typography>
        <div className="profile-data-description mid-top-margin">
              <TextField sx={{width: '100%'}}
                id="outlined-multiline-flexible"
                label="Link"
                multiline
                maxRows={1}
                value={values.link}
                onChange={handleChange('link')}
              />
            </div>
          <div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Description</Typography>
            <div className="profile-data-description mid-top-margin">
              <TextField sx={{width: '100%'}}
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                maxRows={4}
                value={values.description}
                onChange={handleChange('description')}
              />
            </div>
          </div> 
          <div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Technologies</Typography>
            <div className="profile-data-description">
              Tecnologias {/* Tecnologias // Aqui renderizar select */}
            </div>    
          </div>     
            <Button onClick={() => newProject()} className='profile-btn' variant="contained" sx={{ alignSelf:'center', marginTop:'30px', borderRadius: '5px'}}>Create Project</Button>
        </div>
        
      </CardContent>
    </Card>
  )
}

export default NewProject
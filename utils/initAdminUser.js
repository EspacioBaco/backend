import bcrypt from 'bcrypt';
import { Usuario } from '../models/user.model.js';

const initAdminUser = async () => {
    try {
      const adminExists = await Usuario.findOne({ where: { tipo: 'admin', correo: 'espaciobacoadmin@gmail.com'} });
  
      if (!adminExists) {
        const hashedPassword = await bcrypt.hash('EspacioBaco3540', 10);
        await Usuario.create({
          tipo: 'admin',
          nombre: 'Admin',
          apellido: 'User',
          correo: 'espaciobaco75@gmail.com',
          contrasenia: hashedPassword,
          telefono: 'xxxxxxxxxx',
          direccion: 'xxxxxxxxxx'
        });
        console.log('Admin user created');
      } else {
        console.log('Admin user already exists');
      }
    } catch (error) {
      console.error('Error initializing admin user:', error);
    }
  };
  
  export default initAdminUser;
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: "dui9fnvcj",
    api_key: "864169615897594",
    api_secret: "vMHdnDOlG8q_pChIR-PoL6ZXdyY"
});
export const uploadImage = async filePath =>{
    return await cloudinary.uploader.upload(filePath,{
        folder: 'posts',

    })
};

export const deleteImage = async id =>{
    return await cloudinary.uploader.destroy(id)
};
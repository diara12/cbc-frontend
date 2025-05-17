import { createClient } from "@supabase/supabase-js"

const url ="https://wjeicergssfvccmntyen.supabase.co"
const key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZWljZXJnc3NmdmNjbW50eWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MjM0MzgsImV4cCI6MjA2MjE5OTQzOH0.S4GlBCY9NiWso6--uykND-1MEz56gMa7rnoWHM9UdDQ"

const supabase = createClient(url, key)

export default function mediaUpload(file){

    const mediaUploadPromise = new Promise(
        (resolve, reject)=>{
            if(file == null){
                reject("No file selected")
                return
            }

            const timestamp = new Date().getTime()
            const newName = timestamp+file.name

            supabase.storage.from("images").upload(newName, file, {
                upsert:false,
                cacheControl: "3600",
            }).then(()=>{
                const publicUrl = supabase.storage.from("images").getPublicUrl(newName).data.publicUrl
                resolve(publicUrl)
            }).catch(
                ()=>{
                    reject("Error occured in supabase connection")
                }
            )
        }
    )

    return mediaUploadPromise
}


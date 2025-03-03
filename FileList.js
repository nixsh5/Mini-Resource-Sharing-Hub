import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";

const FileList = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const storageRef = ref(storage, "uploads/"); // Folder where files are stored
                const result = await listAll(storageRef);

                // Get file URLs
                const fileList = await Promise.all(
                    result.items.map(async (fileRef) => {
                        const url = await getDownloadURL(fileRef);
                        return { name: fileRef.name, url };
                    })
                );

                setFiles(fileList);
            } catch (error) {
                console.error("Error fetching files:", error);
            }
        };

        fetchFiles();
    }, []);

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Uploaded Files</h2>
            {files.length === 0 ? (
                <p>No files uploaded yet.</p>
            ) : (
                <ul className="space-y-2">
                    {files.map((file, index) => (
                        <li key={index} className="p-2 bg-gray-100 rounded flex justify-between">
                            <span>{file.name}</span>
                            <a
                                href={file.url}
                                download
                                className="bg-blue-500 text-white px-2 py-1 rounded"
                            >
                                Download
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FileList;

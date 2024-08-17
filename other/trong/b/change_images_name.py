import os

# Path to the folder containing the image files
folder_path = "src\database\images"

# Get a list of all files in the folder
files = os.listdir(folder_path)

# Filter out only PNG image files
png_files = [file for file in files if file.endswith('.png')]

# Sort the image files
png_files.sort()

# Rename the files
for index, file_name in enumerate(png_files, start=1):
    new_name = f'A{index:03d}.png'
    source = os.path.join(folder_path, file_name)
    destination = os.path.join(folder_path, new_name)
    
    try:
        os.rename(source, destination)
        print(f'Renamed: {file_name} -> {new_name}')
    except Exception as e:
        print(f'Error renaming {file_name}: {str(e)}')

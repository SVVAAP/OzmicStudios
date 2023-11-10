import pyqrcode
from tkinter import *
from PIL import Image, ImageTk
from tkinter import messagebox
from tkinter import filedialog
from tkinter.colorchooser import askcolor

# Function to take the input, convert it to an image code, and save the QR code as an image file.
def get_code():
    data_var = data.get()
    
    # Check if the input is not empty
    if data_var.strip() == "":
        messagebox.showerror("Error", "Please enter some data to generate a QR code.")
        return
    
    generate_qr_code(data_var)

# Function to generate and display the QR code with customized colors
def generate_qr_code(data_var, foreground_color=None, background_color=None):
    qr = pyqrcode.create(data_var)
    
    # If foreground and background colors are not provided, use default (black on white)
    if foreground_color is None:
        foreground_color = (0, 0, 0)  # Black
    if background_color is None:
        background_color = (255, 255, 255)  # White

    qr.png('code.png', scale=6, module_color=foreground_color, background=background_color)
    
    show_qr_code()

# Function to display the generated QR code
def show_qr_code():
    clear_buttons()
    
    # Create a frame to hold the QR code and buttons
    qr_frame = Frame(base)
    qr_frame.pack(pady=10)
    
    image = Image.open('code.png')
    photo = ImageTk.PhotoImage(image)
    label = Label(qr_frame, image=photo)
    label.image = photo  # Keep a reference to avoid garbage collection
    label.pack()
    
    # Add "Save" and "Customize" buttons
    save_button = Button(qr_frame, text="Save QR Code", command=save_qr_code, width="30", height="2", bg="green")
    save_button.pack(side=LEFT, padx=10)

    customize_button = Button(qr_frame, text="Customize Colors", command=customize_colors, width="30", height="2", bg="blue")
    customize_button.pack(side=LEFT, padx=10)

# Function to open a color chooser dialog for customizing colors
def customize_colors():
    foreground_color, _ = askcolor(title="Choose Foreground Color")
    background_color, _ = askcolor(title="Choose Background Color")
    
    generate_qr_code(data.get(), foreground_color, background_color)

# Function to go back to the main screen
def back_to_main():
    clear_qr_code()
    create_main_buttons()

# Function to clear the QR code and show the main buttons
def clear_qr_code():
    for widget in base.winfo_children():
        widget.pack_forget()
    data.set("")
    dataEntry = Entry(textvariable=data, width="30")
    dataEntry.pack(pady=10)
    create_main_buttons()

# Function to create the main buttons
def create_main_buttons():
    generate_button.pack(pady=10)

# Function to clear the main buttons
def clear_buttons():
    generate_button.pack_forget()

# Function to save the QR code as an image file
def save_qr_code():
    file_path = filedialog.asksaveasfilename(defaultextension=".png", filetypes=[("PNG files", "*.png")])
    if file_path:
        image = Image.open('code.png')
        image.save(file_path)
        messagebox.showinfo("Save QR Code", "QR code saved as an image file.")

# Get a Tk window of 400 * 400
base = Tk()
base.geometry("400x400")
base.title("QR Code Generator")

# Variable to store text for QR Code
data = StringVar()

# Field to input text
dataEntry = Entry(textvariable=data, width="30")
dataEntry.pack(pady=10)

# Call get_code() on click
generate_button = Button(base, text="Generate QR Code", command=get_code, width="30", height="2", bg="grey")
generate_button.pack(pady=10)

create_main_buttons()  # Show the main buttons initially

base.mainloop()

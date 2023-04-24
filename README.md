# Modal Component
A simple and customizable React component for creating modals.

## Installation
You can install the package using npm:

```bash
npm install react_modal_for_hrnet
```
Usage
Import the Modal component in your React application:

```jsx
import Modal from "react_modal_for_hrnet";
```
Then, use it in your React component:

```jsx
function App() {
    // Declare an React State
    const [modalOpen, setModalOpen] = useState(false);
    // Declare an callback function to change the state value
    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Modal isOpen={modalOpen} closeModal={handleModalClose}>
                <h2>Hello World!</h2>
                <p>This is a sample modal.</p>
            </Modal>
        </>
    )
}
````
### Props
The **\`Modal\`** component takes three props:

**\`isOpen\`** (required)
A boolean value that determines whether the modal is open or closed.

**\`closeModal\`** (required)
A function that will be called when the user clicks on the close button or outside of the modal.

**\`children\`** (optional)
Any valid React component or HTML element to be displayed inside the modal.

### Customization
You can customize the styles of the modal by adding your own CSS rules to the **\`.modal\`**, **\`.modal-content\`**, .**\`modal-header\`**, **\`.modal-body\`**, and **\`.modal-btn\`** classes in your application's CSS file.

### License
This project is licensed under the MIT License. See the LICENSE file for details.
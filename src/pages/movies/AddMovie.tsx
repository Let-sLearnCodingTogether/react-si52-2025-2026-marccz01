import { useState, type ChangeEvent, type FormEvent } from "react"
import { Button, Form } from "react-bootstrap"
import { NavLink } from "react-router"
import ApiClient from "../../utils/ApiClient"

interface FromMovie {
    judul : string,
    tahunRilis : string,
    sutradara : string
}

function AddMovies() {
    const [form, setForm] = useState<FromMovie>({
        judul : "",
        tahunRilis : "",
        sutradara : ""
    })

    const handleInputChange = (event : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const handleSumbit = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await ApiClient.post("/movie", form);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return <div className="container mx-auto">
        <div className="d-flex justify-content-between my-3">
        <h4>Add Movie Page</h4>
        <NavLink to="/movies" className="btn btn-primary">List Movie</NavLink>
        </div>
    <div>
        <Form onSubmit={handleSumbit}>
            <Form.Group className="mb-3" controlId="formJudul">
                <Form.Label>Judul</Form.Label>
                <Form.Control
                    value={form.judul}
                    onChange={handleInputChange}
                    name="judul"
                    type="text"
                    placeholder="Judul Fim"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTahunRilis">
                <Form.Label>Tahun Rilis</Form.Label>
                <Form.Control
                    value={form.tahunRilis}
                    onChange={handleInputChange}
                    name="tahunRilis"
                    type="text"
                    placeholder="Tahun Rilis"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSutradara">
                <Form.Label>Sutradara</Form.Label>
                <Form.Control
                    value={form.sutradara}
                    onChange={handleInputChange}
                    name="sutradara"
                    type="text"
                    placeholder="Nama Sutradara"/>
            </Form.Group>

            <Button type="submit" variant="primary">
                PENCET
            </Button>
        </Form>
    </div>
</div>

}

export default AddMovies
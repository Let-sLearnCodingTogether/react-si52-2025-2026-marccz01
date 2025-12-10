import { useCallback, useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { Button, Form } from "react-bootstrap"
import { NavLink } from "react-router"
import ApiClient from "../../utils/ApiClient"
import { useParams, useNavigate } from "react-router"

interface FromMovie {
    judul : string,
    tahunRilis : string,
    sutradara : string
}

interface ResponseData {
    data : {
        _id : string,
        judul : string,
        tahunRilis : string,
        sutradara : string,
        createdBy : string,
        createdAt : string,
        updateAt : string,
        _v : string
    },
    message : string
}

function EditMovie() {
    const params = useParams()
    const navigate = useNavigate()
    const [form, setForm] = useState<FromMovie>({
        judul : "",
        tahunRilis : "",
        sutradara : "",

    })

    const fetchMovie = useCallback(async() => {
        const response = await ApiClient.get(`/movie/${params.id}`)
        
        if(response.status === 200) {
            const responseData : ResponseData = response.data
            setForm({
                judul : responseData.data.judul,
                tahunRilis : responseData.data.tahunRilis,
                sutradara : responseData.data.sutradara
            })
        }
    }, [params])

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
            const response = await ApiClient.post(`/movie/${params.id}`, form);
            navigate("/movies", {
                replace : true
            })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovie()
    }, [fetchMovie])

    return <div className="container mx-auto">
        <div className="d-flex justify-content-between my-3">
        <h4>Edit Movie Page</h4>
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
export default EditMovie

function useCallbBack(arg0: () => Promise<void>, arg1: any[]) {
    throw new Error("Function not implemented.")
}

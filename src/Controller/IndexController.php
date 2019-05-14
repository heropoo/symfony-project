<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/")
     */
    public function index(){
        return $this->render('index.html.twig');
    }

    /**
     * @Route("/home", name="home")
     */
    public function home(){
        return $this->render('home.html.twig');
    }
}
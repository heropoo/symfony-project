<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class SecurityController extends AbstractController
{
    public function login(Request $request){
        if($request->isXmlHttpRequest()){
            //dd($request->request->all());
            return $this->json(['code'=>200, 'data'=> $request->request->all()]);
        }
        return $this->render('login.html.twig');
    }
}
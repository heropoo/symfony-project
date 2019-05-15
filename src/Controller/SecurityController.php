<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class SecurityController extends AbstractController
{
    public function login(Request $request){
        if($request->isXmlHttpRequest()){
            //dd($request->request->all());
            return JsonResponse::create(['code'=>200, 'msg'=>'登陆成功']);
        }
        return $this->render('login.html.twig');
    }
}
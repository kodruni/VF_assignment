<?php

class User 
{
  public $name = null;
  public $credit = null;
  public $last_tud = null;

  public function fromArray($array) {
    $this->name=$array['name'];
    $this->credit=$array['credit'];
    $this->last_tud=$array['last_tud'];
  }
}